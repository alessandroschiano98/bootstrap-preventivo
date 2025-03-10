
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


function gestioneUserForm(event) {
    event.preventDefault();

    // PRELEVARE I DATI DEGLI INPUTS //
    const typeOfWork = typeOfWorkSelect.value;

    // CICLO PER LE VARIE POSSIBILITA' SECONDO IL PREZZIARIO / ORARIO
    let priceOfWorks = 10;
    if (typeOfWorkSelect.value === "backend") {
        priceOfWorks = parseFloat(10 * 20.50);
    } else if (typeOfWorkSelect.value === "frontend") {
        priceOfWorks = parseFloat(10 * 15.30);
    } else if (typeOfWorkSelect.value === "project") {
        priceOfWorks = parseFloat(10 * 33.60);
    }
    finalPrice = priceOfWorks;


    // STAMPIAMO I DATI PRELEVATI PER FARLI RISULTARE IN PAGINA
    finalPriceResult.innerText = `€ ${finalPrice.toFixed(2)}`;

}


