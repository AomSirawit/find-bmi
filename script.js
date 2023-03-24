function calculateBmi(){
    // Get weight and height values from input
    let weight = parseFloat(document.getElementById("weight").value)
    let hight = parseFloat(document.getElementById("hight").value)

    //calculate bmi
    let bmi = weight / ((hight/100)**2);

    //display advice
    let advice
    if (bmi < 18.50) {
        advice = " น้ำหนักต่ำกว่าเกณฑ์"   
    }
    else if(bmi <= 22.90){
        advice = " สมส่วน"
    }
    else if(bmi <= 24.90){
        advice = " เริ่มอ้วน"
    }
    else if(bmi <= 29.90){
        advice = " อ้วน"
    }
    else{
        advice = " โรคอ้วนอันตราย"
    }
     //display result
    let result = "BMI ของคุณเท่ากับ : " + bmi.toFixed(2) +  advice
    document.getElementById("result").innerHTML = result

}
