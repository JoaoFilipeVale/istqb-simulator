export const vDraggable = {
    mounted(el) {
        const handle = el.querySelector('.draggable-handle') || el
        handle.style.cursor = 'move'

        let isDragging = false
        let startX, startY, initialLeft, initialTop

        // Unified Start Drag Handler
        const startDrag = (clientX, clientY) => {
            isDragging = true
            startX = clientX
            startY = clientY

            // Get current position
            const rect = el.getBoundingClientRect()
            initialLeft = rect.left
            initialTop = rect.top

            // Set explicit position styles (switch to fixed positioning)
            el.style.position = 'fixed'
            el.style.left = `${initialLeft}px`
            el.style.top = `${initialTop}px`
            el.style.margin = '0'
            el.style.transform = 'none'
            el.style.touchAction = 'none' // Prevent scrolling while dragging
        }

        // Unified Move Handler
        const onMove = (clientX, clientY) => {
            if (!isDragging) return

            const dx = clientX - startX
            const dy = clientY - startY

            el.style.left = `${initialLeft + dx}px`
            el.style.top = `${initialTop + dy}px`
        }

        // Mouse Events
        const onMouseDown = (e) => {
            if (e.button !== 0) return // Only left click
            startDrag(e.clientX, e.clientY)
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
        }

        const onMouseMove = (e) => {
            if (!isDragging) return
            e.preventDefault()
            onMove(e.clientX, e.clientY)
        }

        const onMouseUp = () => {
            isDragging = false
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
        }

        // Touch Events
        const onTouchStart = (e) => {
            if (e.touches.length !== 1) return
            const touch = e.touches[0]
            startDrag(touch.clientX, touch.clientY)
            document.addEventListener('touchmove', onTouchMove, { passive: false })
            document.addEventListener('touchend', onTouchEnd)
        }

        const onTouchMove = (e) => {
            if (!isDragging) return
            e.preventDefault() // Prevent scrolling
            const touch = e.touches[0]
            onMove(touch.clientX, touch.clientY)
        }

        const onTouchEnd = () => {
            isDragging = false
            document.removeEventListener('touchmove', onTouchMove)
            document.removeEventListener('touchend', onTouchEnd)
        }

        handle.addEventListener('mousedown', onMouseDown)
        handle.addEventListener('touchstart', onTouchStart, { passive: false })
    }
}
