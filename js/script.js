const userForm = document.getElementById("user-form")
console.log(userForm);

const nameLabel = document.getElementById("name")
console.log(nameLabel);

const lastnameLabel = document.getElementById("lastname")
console.log(lastnameLabel);

const emailLabel = document.getElementById("email")
console.log(emailLabel);

const codeLabel = document.getElementById("discountcode")

userForm.addEventListener("buttonCalcolaPrev", gestisciUserForm); // calcola non è un codice scaturito da html

function gestisciUserForm(event) {
    event.preventDefault();
    // PRELEVO I VALORI DEGLI INPUT
    const name = nameLabel.value;
    const lastname = surnameLabel.value;
    const email = emailLabel.value;

    

};