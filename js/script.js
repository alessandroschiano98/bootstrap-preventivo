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

// ACCETTA POLICY

function check() {
    document.getElementById("checkPolicy").checked = true;
}

function uncheck() {
    document.getElementById("checkPolicy").checked = false;

}


function gestioneUserForm(event) {
    event.preventDefault();
    //Questo impedisce il comportamento predefinito del form (che sarebbe l'invio e il refresh della pagina).

    // PRELEVARE I DATI DEGLI INPUTS
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
        finalPrice = priceOfWorks - (finalPrice * 25 / 100);
    } else if (codeLabel.value === "") {
        finalPrice = priceOfWorks;
    }
    else {
        alert("Hai inserito un codice sconto errato");
    }

    // Se l'elemento checkPolicy (HTML) risulta false allora esce alert
    if (document.getElementById("checkPolicy").checked === false) {
        alert("Accetta la policy per proseguire");
    }

    // Convertiamo il prezzo in stringa con 2 decimali
    const prezzoStringa = finalPrice.toFixed(2); 

    // Separiamo la parte intera da quella decimale
    const parteIntera = prezzoStringa.split(".")[0];
    const parteDecimale = prezzoStringa.split(".")[1];

    // Stampare il risultato:
    finalPriceResult.innerText = `€ ${finalPrice.toFixed(2)}`;

    // Inseriamo il risultato con il bold solo sulla parte intera
    finalPriceResult.innerHTML = `<strong>€${parteIntera}</strong>.${parteDecimale}`;

    // il metodo .toFixed(2) viene utilizzato per formattare un numero con un numero fisso di cifre decimali. Il valore tra parentesi (in questo caso 2) specifica il numero di decimali desiderati.
}




