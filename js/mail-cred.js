function validateForm(event) {
    const form = document.getElementById("myForm");
    const errorMessage = document.getElementById("error-message");
    if (!form.checkValidity()) {
        // If the form is not valid, prevent submission
        event.preventDefault();
        // You can add your own validation logic or display an error message here
        errorMessage.textContent = "Please fill in all the required fields.";
    }
    if (form.checkValidity()) {
        changeText();
        submitForm1();
        form.reset();
        errorMessage.textContent = "";
    }
}
function validateForm2(event) {
    const form = document.getElementById("myForm1");
    const errorMessage = document.getElementById("error-message1");
    if (!form.checkValidity()) {
        // If the form is not valid, prevent submission
        event.preventDefault();
        // You can add your own validation logic or display an error message here
        errorMessage.textContent = "Please fill in all the required fields.";
    }
    if (form.checkValidity()) {
        changeText1();
        submitForm2();
        form.reset();
        errorMessage.textContent = "";
    }
}
function validateForm3(event) {
    const form = document.getElementById("myForm2");
    const errorMessage = document.getElementById("error-message2");
    if (!form.checkValidity()) {
        // If the form is not valid, prevent submission
        event.preventDefault();
        // You can add your own validation logic or display an error message here
        errorMessage.textContent = "Please fill in all the required fields.";
    }
    if (form.checkValidity()) {
        submitForm3();
        form.reset();
        errorMessage.textContent = "";
    }
}
function submitForm1(event) {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
      url = 'https://apipapi.netlify.app/api/new'; // Replace with your actual API endpoint

    // Convert FormData to a plain object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response here, e.g., show a success message to the user 
        // You can also redirect the user to a thank you page or perform other actions
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error here, e.g., show an error message to the user 
    });
  }
function submitForm2(event) {
  const form = document.getElementById('myForm1');
  const formData = new FormData(form);
  const url = 'https://apipapi.netlify.app/api/new';

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Handle success response here
  })
  .catch(error => {
      console.error('Error:', error);
      // Handle error here
  });
}
function submitForm3() {
  const form = document.getElementById('myForm2');
  const formData = new FormData(form);
  const url = 'https://apipapi.netlify.app/api/new';

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Handle success response here
  })
  .catch(error => {
      console.error('Error:', error);
      // Handle error here
  });
}