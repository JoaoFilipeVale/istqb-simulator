import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import dayjs from 'dayjs'

/**
 * Generates a PDF report for the exam results.
 * @param {Object} data - Exam data
 * @param {Object} t - Translation function from vue-i18n
 */
export function generateExamReport(data, t) {
    const doc = new jsPDF()

    const pageWidth = doc.internal.pageSize.width
    const margin = 14

    // --- Header ---
    doc.setFontSize(22)
    doc.setTextColor(40, 40, 40)
    doc.text(t('results_pdf.report_title'), margin, 20)

    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text(t('results_pdf.app_name'), pageWidth - margin - 35, 20)

    // --- Info Section ---
    const startY = 35
    const lineHeight = 7

    doc.setFontSize(11)
    doc.setTextColor(0, 0, 0)

    // Date
    doc.setFont("helvetica", "bold")
    doc.text(`${t('results_pdf.date')}:`, margin, startY)
    doc.setFont("helvetica", "normal")
    doc.text(dayjs().format('DD/MM/YYYY HH:mm'), margin + 30, startY)

    // Candidate
    doc.setFont("helvetica", "bold")
    doc.text(`${t('results_pdf.candidate')}:`, margin, startY + lineHeight)
    doc.setFont("helvetica", "normal")
    doc.text(t('results_pdf.anonymous_candidate'), margin + 30, startY + lineHeight)

    // Result
    doc.setFont("helvetica", "bold")
    doc.text(`${t('results_pdf.result')}:`, margin, startY + (lineHeight * 2))
    doc.setFont("helvetica", "normal")
    const resultText = data.passed ? t('results_pdf.passed') : t('results_pdf.failed')
    const percentage = Math.round((data.score / 40) * 100)

    doc.setTextColor(data.passed ? 0 : 200, data.passed ? 150 : 0, 0) // Green or Red
    doc.text(`${resultText} (${percentage}%)`, margin + 30, startY + (lineHeight * 2))

    // Reset Color
    doc.setTextColor(0, 0, 0)

    // --- Domain Breakdown Table ---
    // Create table data from chapters
    const tableBody = Object.entries(data.chapterStats).map(([chapterNum, stats]) => {
        const chapterName = t(`chapters.${chapterNum}`)
        return [
            `LO ${chapterNum} - ${chapterName}`,
            stats.total,
            stats.correct,
            `${Math.round((stats.correct / stats.total) * 100)}%`
        ]
    })

    // Add Total Row
    tableBody.push([
        { content: t('results_pdf.total'), styles: { fontStyle: 'bold' } },
        { content: '40', styles: { fontStyle: 'bold' } },
        { content: String(data.score), styles: { fontStyle: 'bold' } },
        { content: `${percentage}%`, styles: { fontStyle: 'bold' } }
    ])

    autoTable(doc, {
        startY: startY + (lineHeight * 4),
        head: [[
            t('results_pdf.topic'),
            t('results_pdf.max_points'),
            t('results_pdf.score'),
            t('results_pdf.percent')
        ]],
        body: tableBody,
        theme: 'striped',
        headStyles: { fillColor: [66, 66, 66] },
        styles: { fontSize: 10, cellPadding: 3 },
        columnStyles: {
            0: { cellWidth: 'auto' }, // Topic
            1: { cellWidth: 25, halign: 'center' }, // Max
            2: { cellWidth: 25, halign: 'center' }, // Score
            3: { cellWidth: 25, halign: 'center' }  // Percent
        }
    })

    // --- Visual Graph (Horizontal Bars) ---
    // Draw simple bars for each chapter below the table
    let graphY = doc.lastAutoTable.finalY + 20

    doc.setFontSize(14)
    doc.text(t('results_pdf.domain_breakdown'), margin, graphY)
    graphY += 10

    Object.entries(data.chapterStats).forEach(([chapterNum, stats]) => {
        if (graphY > 270) {
            doc.addPage()
            graphY = 20
        }

        const pct = stats.correct / stats.total
        const barWidth = 100 // Max width in mm
        const filledWidth = barWidth * pct

        doc.setFontSize(9)
        doc.text(`LO ${chapterNum} (${Math.round(pct * 100)}%)`, margin, graphY + 4)

        // Background bar
        doc.setFillColor(240, 240, 240)
        doc.rect(margin + 30, graphY, barWidth, 5, 'F')

        // Filled bar
        if (pct > 0) {
            doc.setFillColor(70, 130, 180) // SteelBlue
            doc.rect(margin + 30, graphY, filledWidth, 5, 'F')
        }

        graphY += 10
    })

    // Footer
    const pageCount = doc.internal.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.setFontSize(8)
        doc.setTextColor(150)
        doc.text(t('results_pdf.page_x_of_y', { current: i, total: pageCount }), pageWidth - margin - 20, doc.internal.pageSize.height - 10)
        doc.text(`${t('results_pdf.generated_by')} ${dayjs().format('DD/MM/YYYY')}`, margin, doc.internal.pageSize.height - 10)
    }

    doc.save('exam-report.pdf')
}
