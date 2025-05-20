document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
    let isValid = true;
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
      isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      isValid = false;
    }
  
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent = "Password must be 8+ chars and include a number.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Form submitted successfully!");
    }

    if(email === "asil@gmail.com" && password === "123"){
        window.location.href = "./index.html"
    }

  });


  