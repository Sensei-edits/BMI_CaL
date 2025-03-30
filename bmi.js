function bmical(){
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    if(w ==='' || h ===''){
        alert('Please enter both weight and height.');
        return;
    }
    const hmeter = h / 100;
    const bmi = w / (hmeter * hmeter);
    const roundedbmi = bmi.toFixed(2);

    document.getElementById('bmiValue').innerText = `Your BMI: ${roundedbmi}`;

    let category = '';
    if (bmi < 18.5){
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9){
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9){
        category = 'Overweight';
    } else{
        category = 'Obese';
    }
    document.getElementById('bmiCategory').innerText = `Category: ${category}`;
}
