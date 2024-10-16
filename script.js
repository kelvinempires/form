const formEl = document.querySelector("form");
console.log(formEl);
function validateForm(e) {
  e.preventDefault();
  const firstNameEl = document.getElementById("firstName").value;
  const secondNameEl = document.getElementById("secondName").value;
  const emailEl = document.getElementById("email").value;
  const passwordEl = document.getElementById("password").value;
  const checkboxEl = document.getElementById("checkbox").checked;
  if (firstNameEl === "") {
    alert("first name is required");
  }

  if (secondNameEl === "") {
    alert("second name is required");
  }
  if (emailEl === "") {
    alert("email is required");
  }
  if (passwordEl === "") {
    alert("password is required");
  }
  if (checkboxEl === "") {
    alert("do you accept the terms and condition");
  }
  if (
    firstNameEl !== "" &&
    secondNameEl !== "" &&
    emailEl !== "" &&
    passwordEl !== "" &&
    checkboxEl === true
  ) {
    alert("form submitted successfully");
  }
}
formEl.addEventListener("submit", validateForm);

document.querySelector(".fa-regular").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
