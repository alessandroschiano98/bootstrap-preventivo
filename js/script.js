// Il codice inizia recuperando gli elementi del modulo HTML utilizzando document.getElementById(). Per ogni elemento selezionato, viene stampato il riferimento nella console con console.log(). Gli elementi selezionati includono:

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

// L'evento submit viene associato al form con:
// Ciò significa che quando l'utente invia il form, viene eseguita la funzione gestioneUserForm().
userForm.addEventListener("submit", gestioneUserForm);


userForm.addEventListener("submit", gestioneUserForm);


function gestioneUserForm(event) {
    event.preventDefault();
    //Questo impedisce il comportamento predefinito del form (che sarebbe l'invio e il refresh della pagina).

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

    // Viene creata una lista di codici sconto validi:
    const discount25Code = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    // Poi viene verificato se il codice inserito è presente in questa lista:
    if (discount25Code.includes(codeLabel.value)) {
        finalPrice = priceOfWorks - (finalPrice * 25 / 100);}

    // Stampare il risultato:
    finalPriceResult.innerText = `€ ${finalPrice.toFixed(2)}`;
}


