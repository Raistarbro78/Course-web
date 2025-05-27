const singUpForm = document.getElementById("signupForm")
console.log(singUpForm);

singUpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let hasError = false;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    hasError = true;
  }


  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address.";
    hasError = true;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    hasError = true;
  }


  
  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    hasError = true;
  }

  if (!hasError) {
    alert("Form submitted successfully!");
  }

  if(email === "asil@gmail.com" && password === "123"){
    window.location.href = "./index.html"
}

});



  