
// When you check the box the email field appears using event listeners
// document.querySelector("#subscribe").addEventListener("click", challenge1());

// function challenge1() {
//     if (document.getElementById("subscribe").checked == true) {
//         document.getElementById("emailDiv").style.display = "block";
//     } else{
//         document.getElementById("emailDiv").style.display = "none";
//     }

// }
// When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
// Fix the Accessibility Error on the page
document.querySelector("#sameAddress").addEventListener("click", challenge2());
function challenge2(element){
    let billAddress = document.querySelector("#bill")
    let HomeAddress = document.querySelector("#home")
    console.log("billAddress", billAddress)
    console.log("HomeAddress", HomeAddress)
    if (document.querySelector("#sameAddress").checked){
        HomeAddress.value = billAddress.value;
        HomeAddress.disabled = true;
    }
    else {
        HomeAddress.value = "";
        HomeAddress.disabled = false;
    }
}
