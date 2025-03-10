
// FORM INPUT 
const userForm = document.getElementById("user-form")
console.log(userForm);

const nameLabel = document.getElementById("name")
console.log(nameLabel);

const lastnameLabel = document.getElementById("lastname")
console.log(lastnameLabel);

const emailLabel = document.getElementById("email")
console.log(emailLabel);

const codeLabel = document.getElementById("discountcode")

const typeOfWorkSelect = document.getElementById("typeOfWork")
console.log(typeOfWorkSelect);

const buttonCalcolaSubmit = document.getElementById ("buttonCalcola")
console.log(buttonCalcolaSubmit);

const finalPriceResult = document.getElementById ("finalPrice")
console.log(finalPriceResult);

/*
// PREZZI ORARI 
const commissioni = {
    1: 20.50, // Sviluppo backend (22 ore) 20,50€ x ora
    2: 15.30, // Sviluppo frontend (32 ore) 15,30€ x ora
    3: 33.60  // Project analysis (24 ore) 33,60€ x ora
};
*/

userForm.addEventListener("buttonCalcola", gestisciUserForm);

function gestisciUserForm(event) {
    event.preventDefault();
    // PRELEVO I VALORI DEGLI INPUT
    const name = nameLabel.value;
    const lastname = lastnameLabel.value;
    const email = emailLabel.value;
    const discountcode = codeLabel.value;
    const typeOfWork = typeOfWorkSelect.value;



};


