const form = document.querySelector('.login-form');
 const inputEls = document.querySelectorAll('input');
inputEls.forEach(input => {
    input.classList.add('input-label');
});




const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const formElements = event.target.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();


    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

   
    const formData = {
        email: email,
        password: password
    };

    console.log(formData); 

   
    form.reset();
};

form.addEventListener('submit', handleFormSubmit);

