 var nameError = document.getElementById(`name-error`);
 var phoneError = document.getElementById(`phone-error`);
 var emailError = document.getElementById(`email-error`);
 var messageError = document.getElementById(`message-error`);
 var submitError = document.getElementById(`submit-error`);

// Name Valiadtor//////////////////////////////////
 function validateName(){
    var name = document.getElementById(`contact-name`).value;

    if(name.length == 0){
        nameError.innerHTML = `Name is required`;
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = `write full name`;
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i> `;
    return true;
 }
/************************Phoone validatpr ********************/
 
 function validatePhone(){
    var phone = document.getElementById(`contact-phone`).value;

    if(phone.length == 0){
        phoneError.innerHTML = `Phone no is required`;
        return false;
    }

    if(phone.length !== 11){
        phoneError.innerHTML = `Phone no should be 11 digits`;
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = `Only digits please`;
        return false;

    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i> `;
    return true; 
}

/************************** Email validator ******************/
function validateEmail(){
    var email = document.getElementById(`contact-email`).value;

    if(email.length == 0){
        emailError.innerHTML = `Email is required`;
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ )){
        emailError.innerHTML = `Email invalid`;
        return false;

    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i> `;
    return true;
}
 