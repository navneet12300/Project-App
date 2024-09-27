        function calculateArea() {
            // Get the side lengths from input fields
            const a = parseFloat(document.getElementById('sideA').value);
            const b = parseFloat(document.getElementById('sideB').value);
            const c = parseFloat(document.getElementById('sideC').value);

            // Check if the input values are valid
            if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
                document.getElementById('result').textContent = 'Please enter valid positive numbers for all sides.';
                return;
            }

            // Calculate the semi-perimeter
            const s = (a + b + c) / 2;

            // Calculate the area using Heron's formula
            const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

            // Display the result
            document.getElementById('result').textContent = `The area of the triangle is ${area.toFixed(2)} square units.`;
        }
