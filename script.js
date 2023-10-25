function creditCard() {
    console.log("button has been pressed!");
    let name = document.getElementById("name");
    let cardName = document.getElementById("card-name");

    let number = document.getElementById("number");
    let cardNumber = document.getElementById("card-number");

    let expMonth = document.getElementById("ex-month");
    let cardMonth = document.getElementById("card-month");

    let expYear = document.getElementById("ex-year");
    let cardYear = document.getElementById("card-year");

    let ccv = document.getElementById("ccv");
    let cvcNum = document.getElementById("cvc-num");

    if (name.value == ""){
        name.style.borderColor = "red";
    } 
    else if (number.value == ""){
        console.log("number is empty");
        number.style.borderColor = "red";
    } 
    else if (expMonth.value == ""){
        expMonth.style.borderColor = "red";
    }
    else if (expYear.value == ""){
        expYear.style.borderColor = "red";
    }
    else if (ccv.value == ""){
        ccv.style.borderColor = "red";
    } else{
        cardName.innerHTML = name.value;
        cardNumber.innerHTML = number.value;
        cardMonth.innerHTML = expMonth.value;
        cardYear.innerHTML = expYear.value;
        cvcNum.innerHTML = ccv.value;
    }
}