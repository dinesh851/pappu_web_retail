 

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