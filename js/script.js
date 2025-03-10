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

userForm.addEventListener("buttonCalcolaPrev", gestisciUserForm); 

function gestisciUserForm(event) {
    event.preventDefault();
    // PRELEVO I VALORI DEGLI INPUT
    const name = nameLabel.value;
    const lastname = lastnameLabel.value;
    const email = emailLabel.value;

    const baseOrediLavoro = 0.21;
    const ticket = parseFloat(0.21 * kmLabel.value)
    console.log(ticket);


};


