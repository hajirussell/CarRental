"use strict";

window.onload = function () {
    const estimateTotalCostBtn = document.getElementById("estimateTotalCostBtn");
    estimateTotalCostBtn.onclick = estimateTotalCostBtnClicked;
}

function estimateTotalCostBtnClicked () {
    //find the date of the pick up and hold onto the value
    const pickupDateField = document.getElementById("pickupDate");
    let pickupDate = pickupDateField.value;

    //find the number of days the rental is and hold it as a number
    const numberOfDaysField = document.getElementById("numberOfDays");
    let numberOfDays = Number(numberOfDaysField.value);


    let basicCarRentalCost = Number(numberOfDays * 29.99);

    let serviceAdditions = 0;
    
    //see if the tolltag checkbox is checked and hold onto that value
    //add cost ($3.95) if true
    const tollTagCheckbox = document.getElementById("tollTag");
    if (tollTagCheckbox.checked == true) {
        serviceAdditions += Number(numberOfDays * 3.95);
    }
    
    //see if the gps checkbox is checked and hold onto that value
    //add cost ($2.95) if true
    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        serviceAdditions += Number(numberOfDays * 2.95);
    }

    //see if the roadside assitance checkbox is checked and hold onto that value
    //add service cost ($2.95) if true
    const roadsideAssistanceCheckbox = document.getElementById("roadsideAssistance");
    if (roadsideAssistanceCheckbox.checked == true) {
        serviceAdditions += Number(numberOfDays * 2.95);
    }

    //see which radio button is selected for under 25 and hold onto that value
    //hold onto surcharge value

    let under25SurchargeFee;
    const yes25RadioBtn = document.getElementById("yes25");
    if (yes25RadioBtn.checked == true) {
        under25SurchargeFee = Number(basicCarRentalCost * .3);
    }
    else {
        under25SurchargeFee = 0;
    }

    //calculate the values
    let totalDueCost = Number(basicCarRentalCost + serviceAdditions + under25SurchargeFee);

    //print all the values to the website
    const basicCarRentalTotalPara = document.getElementById("basicCarRentalTotal");
    basicCarRentalTotalPara.innerHTML = "Car Rental: $" + basicCarRentalCost.toFixed(2);

    const optionsTotalPara = document.getElementById("optionsTotal");
    optionsTotalPara.innerHTML = "Options: $" + serviceAdditions.toFixed(2);

    const under25SurchargePara = document.getElementById("under25Surcharge");
    under25SurchargePara.innerHTML = "Under 25 Surcharge: $" + under25SurchargeFee.toFixed(2);

    const totalDuePara = document.getElementById("totalDue");
    totalDuePara.innerHTML = "Total Due: $" + totalDueCost.toFixed(2);

}