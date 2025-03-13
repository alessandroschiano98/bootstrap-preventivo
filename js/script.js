// IL CODICE INIZIA RECUPERANDO GLI ELEMENTI DEL MODULO HTML UTILIZZANDO document.getElementById().
// PER OGNI ELEMENTO SELEZIONATO, VIENE STAMPATO IL RIFERIMENTO NELLA CONSOLE CON console.log().
// GLI ELEMENTI SELEZIONATI INCLUDONO:

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

// L'EVENTO SUBMIT VIENE ASSOCIATO AL FORM CON:
// CIÒ SIGNIFICA CHE QUANDO L'UTENTE INVIA IL FORM, VIENE ESEGUITA LA FUNZIONE gestioneUserForm().
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
    // QUESTO IMPEDISCE IL COMPORTAMENTO PREDEFINITO DEL FORM (CHE SAREBBE L'INVIO E IL REFRESH DELLA PAGINA).

    // PRELEVARE I DATI DEGLI INPUTS
    const typeOfWork = typeOfWorkSelect.value;
    let priceOfWorks = 0;

    // DETERMINARE IL PREZZO IN BASE AL TIPO DI LAVORO (ISTRUZIONI CONDIZIONALI)
    if (typeOfWork === "backend") {
        priceOfWorks = 10 * 20.50;
    } else if (typeOfWork === "frontend") {
        priceOfWorks = 10 * 15.30;
    } else if (typeOfWork === "project") {
        priceOfWorks = 10 * 33.60;
    }

    let finalPrice = priceOfWorks;

    // VIENE CREATA UNA LISTA DI CODICI SCONTO VALIDI:
    const discount25Code = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    // POI VIENE VERIFICATO SE IL CODICE INSERITO È PRESENTE IN QUESTA LISTA:
    if (discount25Code.includes(codeLabel.value)) {
        finalPrice = priceOfWorks - (finalPrice * 25 / 100);
    } else if (codeLabel.value === "") {
        finalPrice = priceOfWorks;
    }
    else {
        alert("Hai inserito un codice sconto errato");
    }

    // SE L'ELEMENTO checkPolicy (HTML) RISULTA FALSE ALLORA ESCE ALERT
    if (document.getElementById("checkPolicy").checked === false) {
        alert("Accetta la policy per proseguire");
    }

    // CONVERTIAMO IL PREZZO IN STRINGA CON 2 DECIMALI
    const prezzoFinaleStringa = finalPrice.toFixed(2); 

    // SEPARIAMO LA PARTE INTERA DA QUELLA DECIMALE
    const parteIntera = prezzoFinaleStringa.split(".")[0];
    const parteDecimale = prezzoFinaleStringa.split(".")[1];

    // STAMPARE IL RISULTATO CON UN INTERPOLAZIONE DI STRINGHE:
    finalPriceResult.innerText = `€ ${finalPrice.toFixed(2)}`;

    // INSERIAMO IL RISULTATO CON IL BOLD SOLO SULLA PARTE INTERA:
    finalPriceResult.innerHTML = `<strong>€${parteIntera}</strong>.${parteDecimale}`;

    // IL METODO .toFixed(2) VIENE UTILIZZATO PER FORMATTARE UN NUMERO CON UN NUMERO FISSO DI CIFRE DECIMALI.
    // IL VALORE TRA PARENTESI (IN QUESTO CASO 2) SPECIFICA IL NUMERO DI DECIMALI DESIDERATI.
}
