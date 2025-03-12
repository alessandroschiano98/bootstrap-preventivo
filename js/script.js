
// FORM INPUT 
const userForm = document.getElementById("user-form")
console.log(userForm);

const nameLabel = document.getElementById("name")
console.log(nameLabel);

const lastnameLabel = document.getElementById("lastname")
console.log(lastnameLabel);

const emailLabel = document.getElementById("email")
console.log(emailLabel);

const typeOfWorkSelect = document.getElementById("typeOfWork")
console.log(typeOfWorkSelect);

const textAreaSpace = document.getElementById("textArea")
console.log(textAreaSpace);

const codeLabel = document.getElementById("discountcode")
console.log(codeLabel);

const checkPolicyInput = document.getElementById("checkPolicy")
console.log(checkPolicyInput);

const buttonCalcolaSubmit = document.getElementById("buttonCalcola")
console.log(buttonCalcolaSubmit);

const finalPriceResult = document.getElementById("finalPrice")
console.log(finalPriceResult);

userForm.addEventListener("submit", gestioneUserForm);


userForm.addEventListener("submit", gestioneUserForm);

function gestioneUserForm(event) {
    event.preventDefault();

    // PRELEVARE I DATI DEGLI INPUTS //
    const typeOfWork = typeOfWorkSelect.value;
    let priceOfWorks = 0;

    // DETERMINARE IL PREZZO IN BASE AL TIPO DI LAVORO
    if (typeOfWork === "backend") {
        priceOfWorks = 10 * 20.50;
    } else if (typeOfWork === "frontend") {
        priceOfWorks = 10 * 15.30;
    } else if (typeOfWork === "project") {
        priceOfWorks = 10 * 33.60;
    }

    let finalPrice = priceOfWorks;

    // CODICI SCONTO VALIDI
    const discount25Code = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    // VERIFICA SE IL CODICE INSERITO È VALIDO
    if (discount25Code.includes(codeLabel.value)) {
        finalPrice = finalPrice - (finalPrice * 25 / 100);
    } else (codeLabel.value = "");

    // STAMPA IL RISULTATO
    finalPriceResult.innerText = `€ ${finalPrice.toFixed(2)}`;
}


