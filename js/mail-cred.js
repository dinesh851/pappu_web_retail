const url = 'http://localhost:8888/api/new';

function validateForm(event) {
    const form = document.getElementById("myForm");
    const errorMessage = document.getElementById("error-message");
    let notFilledFields = [];

    // Check each form element for validity
    for (const element of form.elements) {
        if (element.tagName !== "BUTTON" && !element.checkValidity()) {
            notFilledFields.push(element.placeholder || element.name);
        }
    }

    if (notFilledFields.length > 0) {
        // If there are unfilled fields, prevent submission
        event.preventDefault();
        // Display an error message with the unfilled fields
        errorMessage.textContent = `Please fill in : ${notFilledFields.join(", ")}.`;
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
    let notFilledFields = [];

    // Check each form element for validity
    for (const element of form.elements) {
        if (element.tagName !== "BUTTON" && !element.checkValidity()) {
            notFilledFields.push(element.placeholder || element.name);
        }
    }

    if (notFilledFields.length > 0) {
        // If there are unfilled fields, prevent submission
        event.preventDefault();
        // Display an error message with the unfilled fields
        errorMessage.textContent = `Please fill in : ${notFilledFields.join(", ")}.`;
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
    let notFilledFields = [];

    // Check each form element for validity
    for (const element of form.elements) {
        if (element.tagName !== "BUTTON" && !element.checkValidity()) {
            notFilledFields.push(element.placeholder || element.name);
        }
    }

    if (notFilledFields.length > 0) {
        // If there are unfilled fields, prevent submission
        event.preventDefault();
        // Display an error message with the unfilled fields
        errorMessage.textContent = `Please fill in the following fields: ${notFilledFields.join(", ")}.`;
    }
 
    if (form.checkValidity()) {
        changeText2();
        submitForm3();
        form.reset();
        errorMessage.textContent = "";
    }
}
function submitForm1(event) {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

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
      // Handle success response here
  })
  .catch(error => {
      console.error('Error:', error);
      // Handle error here
  });
}