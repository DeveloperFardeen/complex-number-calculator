document.addEventListener('DOMContentLoaded', function() {
    const re1Input = document.getElementById('re1');
    const im1Input = document.getElementById('im1');
    const abs1Input = document.getElementById('abs1');
    const arg1Input = document.getElementById('arg1');
    const re2Input = document.getElementById('re2');
    const im2Input = document.getElementById('im2');
    const abs2Input = document.getElementById('abs2');
    const arg2Input = document.getElementById('arg2');
  
    // Function to calculate absolute value of a complex number
    function calculateAbs(re, im) {
      return Math.sqrt(re * re + im * im);
    }
  
    // Function to calculate argument (in degrees) of a complex number
    function calculateArg(re, im) {
      return Math.atan2(im, re) * (180 / Math.PI);
    }
  
    // Function to update absolute value and argument based on real and imaginary parts
    function updateValues(reInput, imInput, absInput, argInput) {
      const re = parseFloat(reInput.value);
      const im = parseFloat(imInput.value);
      if (!isNaN(re) && !isNaN(im)) {
        absInput.value = calculateAbs(re, im);
        argInput.value = calculateArg(re, im);
      }
    }
  
    // Update absolute value and argument when real or imaginary parts change
    re1Input.addEventListener('input', function() {
      updateValues(re1Input, im1Input, abs1Input, arg1Input);
    });
  
    im1Input.addEventListener('input', function() {
      updateValues(re1Input, im1Input, abs1Input, arg1Input);
    });
  
    re2Input.addEventListener('input', function() {
      updateValues(re2Input, im2Input, abs2Input, arg2Input);
    });
  
    im2Input.addEventListener('input', function() {
      updateValues(re2Input, im2Input, abs2Input, arg2Input);
    });

      
        const addBtn = document.getElementById('add');
        const subtractBtn = document.getElementById('subtract');
        const multiplyBtn = document.getElementById('multiply');
        const divideBtn = document.getElementById('divide');
        const powerBtn = document.getElementById('power');
      
        // Function to perform addition of two complex numbers
        function addComplexNumbers(re1, im1, re2, im2) {
          const re = re1 + re2;
          const im = im1 + im2;
          return { re, im };
        }
      
        // Function to perform subtraction of two complex numbers
        function subtractComplexNumbers(re1, im1, re2, im2) {
          const re = re1 - re2;
          const im = im1 - im2;
          return { re, im };
        }
      
        // Function to perform multiplication of two complex numbers
        function multiplyComplexNumbers(re1, im1, re2, im2) {
          const re = re1 * re2 - im1 * im2;
          const im = re1 * im2 + re2 * im1;
          return { re, im };
        }
      
        // Function to perform division of two complex numbers
        function divideComplexNumbers(re1, im1, re2, im2) {
          const denominator = re2 * re2 + im2 * im2;
          const re = (re1 * re2 + im1 * im2) / denominator;
          const im = (re2 * im1 - re1 * im2) / denominator;
          return { re, im };
        }
      
        // Function to perform exponentiation of a complex number
        function powerComplexNumber(re, im, power) {
          const abs = Math.pow(Math.sqrt(re * re + im * im), power);
          const arg = Math.atan2(im, re) * (180 / Math.PI) * power;
          const reResult = abs * Math.cos(arg * (Math.PI / 180));
          const imResult = abs * Math.sin(arg * (Math.PI / 180));
          return { re: reResult, im: imResult };
        }
      
        // Event listeners for operation buttons
        addBtn.addEventListener('click', function() {
          performOperation(addComplexNumbers);
        });
      
        subtractBtn.addEventListener('click', function() {
          performOperation(subtractComplexNumbers);
        });
      
        multiplyBtn.addEventListener('click', function() {
          performOperation(multiplyComplexNumbers);
        });
      
        divideBtn.addEventListener('click', function() {
          performOperation(divideComplexNumbers);
        });
      
        powerBtn.addEventListener('click', function() {
          const power = parseInt(prompt('Enter the power:'));
          if (!isNaN(power)) {
            performPowerOperation(powerComplexNumber, power);
          }
        });
      
        // Function to perform the selected operation
        function performOperation(operation) {
          const re1 = parseFloat(re1Input.value);
          const im1 = parseFloat(im1Input.value);
          const re2 = parseFloat(re2Input.value);
          const im2 = parseFloat(im2Input.value);
      
          if (!isNaN(re1) && !isNaN(im1) && !isNaN(re2) && !isNaN(im2)) {
            const result = operation(re1, im1, re2, im2);
            alert(`Result: ${result.re.toFixed(2)} + ${result.im.toFixed(2)}i`);
          } else {
            alert('Please enter valid complex numbers.');
          }
        }
      
        // Function to perform exponentiation operation
        function performPowerOperation(operation, power) {
          const re = parseFloat(re1Input.value);
          const im = parseFloat(im1Input.value);
      
          if (!isNaN(re) && !isNaN(im)) {
            const result = operation(re, im, power);
            alert(`Result: ${result.re.toFixed(2)} + ${result.im.toFixed(2)}i`);
          } else {
            alert('Please enter a valid complex number.');
          }
        }
      
  });
  