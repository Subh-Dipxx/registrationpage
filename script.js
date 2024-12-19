document.getElementById("registrationForm").addEventListener("submit", function(event) { 
  event.preventDefault();

  // Get the values from the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value; // Get the phone number
  const gender = document.querySelector('input[name="gender"]:checked')?.value; // Get the selected gender

  // Check if all fields are filled
  if (name === "" || email === "" || password === "" || phone === "" || !gender) {
      alert("Please fill in all fields.");
  } else {
      // Create the content to be written into the text file
      const fileContent = `Full Name: ${name}\nEmail: ${email}\nPassword: ${password}\nPhone Number: ${phone}\nGender: ${gender}`;

      // Create a Blob from the content
      const blob = new Blob([fileContent], { type: 'text/plain' });

      // Create a download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'registration_details.txt';

      // Trigger the download by clicking the link
      link.click();

      // Display a confirmation message
      document.getElementById("confirmationMessage").innerText = "Registration successful! Your details have been downloaded.";
  }
});
