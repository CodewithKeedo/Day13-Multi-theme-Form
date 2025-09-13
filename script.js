//Load saved theme from local storage
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme',savedTheme);
document.getElementById('theme').value = savedTheme;

//Theme switcher
const theme = document.getElementById('theme');
theme.addEventListener('change',e =>{
    const selectedTheme = e.target.value;
    document.documentElement.setAttribute('data-theme',selectedTheme);
    localStorage.setItem('theme',selectedTheme);
});

//Form submission handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', e =>{
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    //Save form data to local storage
    const formData = {name,email,message};
    localStorage.setItem('formData',JSON.stringify(formData));
    alert('Form submitted and data saved');
    form.reset();
});

//Load form data from local storage
const savedFormData = localStorage.getItem('formData');
if(savedFormData){
    const {name,email,message} = JSON.parse(savedFormData);
    document.getElementById('name').value = name.name || "";
    document.getElementById('email').value = email.email || "";
    document.getElementById('message').value = message.message || "";
}