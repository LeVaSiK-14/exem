const contactBtn = document.querySelector(".contact");
const modal = document.querySelector(".modal");

function toggleModal () {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if(event.target === modal){
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);
contactBtn.addEventListener("click", toggleModal);




const form = document.querySelector('.modal-form');
const nameModal = form.querySelector('.name-modal');
const emailModal = form.querySelector('.email-modal');
const textModal = form.querySelector('.text-modal');
const sendBtn = form.querySelector('#send-button');
const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const validForm = {};

function validateForm (event) {
    event.preventDefault();
    let isFormValid = true;
    // ==========================================================
    if (!nameModal.value){
        isFormValid = false;
        nameModal.classList.add('input-error');
    }else{
        isFormValid = true;
        nameModal.classList.remove('input-error');
    }
    // ==========================================================
    if (!emailModal.value || re.test(emailModal.value) == false){
        isFormValid = false;
        emailModal.classList.add('input-error');
    }else{
        isFormValid = true;
        emailModal.classList.remove('input-error');
    }
    // ==========================================================
    if (!textModal.value){
        isFormValid = false;
        textModal.classList.add('input-error');
    }else{
        isFormValid = true;
        textModal.classList.remove('input-error');
    }
    // ==========================================================
    if (isFormValid === true){
        validForm.name = nameModal.value;
        validForm.email = emailModal.value;
        validForm.text = textModal.value;
    }

    console.log(validForm)
}

sendBtn.addEventListener("click", validateForm);