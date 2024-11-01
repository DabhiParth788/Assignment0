        // JavaScript to dynamically adjust Box 2 position and height
        function adjustBoxPositions() {
            const box1 = document.getElementById('box1');
            const box2 = document.getElementById('box2');
            
            // Get the height of Box 1 after rendering
            const box1Height = box1.offsetHeight;
            
            // Set the top of Box 2 to the bottom of Box 1
            box2.style.top = `${box1Height}px`;
            
            // Set the height of Box 2 to fill the remaining viewport space
            box2.style.height = `calc(100vh - ${box1Height}px)`;
        }

        // Run the adjustment function on page load and window resize
        window.addEventListener('load', adjustBoxPositions);
        window.addEventListener('resize', adjustBoxPositions);