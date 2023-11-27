var email = "dinesh2468246@gmail.com"; // Replace with your desired email address

// Function to update form action with dynamic email
function updateFormAction(formId) {
  var form = document.getElementById(formId);
  if (form) {
    form.action = "https://formsubmit.co/" + email;
  }
}

// Update form actions for each form
updateFormAction("myForm");
updateFormAction("myForm1");
updateFormAction("myForm2");
