const contact = {};

function addme() {
     contact.firstName = document.getElementById('fname').value;
     contact.lastName = document.getElementById('lname').value;
     contact.email = document.getElementById('email').value;
     contact.phone = document.getElementById('phone').value;
     
     const contactJson = JSON.stringify(contact);
     document.getElementById('json-value').innerHTML = contactJson;
}



