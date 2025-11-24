import { generateWeightedExam } from './src/data/questions.js';

// Generate an exam and analyze chapter distribution
const exam = generateWeightedExam();

console.log('✅ Generated exam with', exam.length, 'questions\n');

// Count questions per chapter
const chapterCounts = {};
exam.forEach(q => {
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;
});

console.log('Chapter Distribution:');
console.log('====================');
const expectedDistribution = {
    1: 8,
    2: 6,
    3: 4,
    4: 11,
    5: 9,
    6: 2
};

let allCorrect = true;
Object.entries(expectedDistribution).forEach(([chapter, expected]) => {
    const actual = chapterCounts[chapter] || 0;
    const status = actual === expected ? '✓' : '✗';
    console.log(`${status} Chapter ${chapter}: ${actual}/${expected} questions`);
    if (actual !== expected) allCorrect = false;
});

console.log('\n' + (allCorrect ? '✅ All chapters have correct distribution!' : '❌ Distribution mismatch detected'));
console.log(`\nTotal: ${exam.length}/40 questions`);

// Verify no duplicates
const ids = exam.map(q => q.id);
const uniqueIds = new Set(ids);
if (ids.length === uniqueIds.size) {
    console.log('✅ No duplicate questions');
} else {
    console.log('❌ Found duplicate questions!');
}
