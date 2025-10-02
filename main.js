document.getElementById('bmi-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Enter values
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    alert('Please enter valid positive numbers for weight and height.');
    return;
  }

  //Changes the height into meters
  const heightM = heightCm / 100;

  // Calculates the BMI
  const bmi = weight / (heightM * heightM);

  // Determines category
  let category = '';
  let categoryClass = '';

  if (bmi < 18.5) {
    category = 'You are underweight !';
    categoryClass = 'underweight';
  } else if (bmi < 24.9) {
    category = 'You have a normal weight';
    categoryClass = 'normal';
  } else if (bmi < 29.9) {
    category = 'You are overweight. !!';
    categoryClass = 'overweight';
  } else {
    category = 'You are obese !!!';
    categoryClass = 'obese';
  }

  // Displays result
  const resultDiv = document.getElementById('result');
  const bmiValue = document.getElementById('bmi-value');
  const bmiCategory = document.getElementById('bmi-category');

  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = category;

  // Reset category classes
  bmiCategory.className = '';
  bmiCategory.classList.add(categoryClass);

  resultDiv.classList.remove('hidden');
});

// Reset button
document.getElementById('reset-btn').addEventListener('click', function() {
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('result').classList.add('hidden');
});
