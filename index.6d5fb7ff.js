!function(){var t="user@mail.com",e="secret",n={},o={formElement:document.querySelector("#login-form"),btn:document.querySelector(".login-btn"),inputLogin:document.querySelector('input[name = "email"]'),inputPassword:document.querySelector('input[name = "password"]')};function r(){o.btn.textContent="LOG out",o.inputLogin.setAttribute("readonly",!0),o.inputPassword.setAttribute("readonly",!0)}o.formElement.addEventListener("input",(function(t){console.log(t.target.name),console.log(t.target.value);var e=t.target,o=e.name,r=e.value;n[o]=r})),o.formElement.addEventListener("submit",(function(a){if(a.preventDefault(),"LOG out"===o.btn.textContent)return console.log("KNOPKAAAAAAAA"),o.btn.textContent="Login",o.inputLogin.removeAttribute("readonly"),o.inputPassword.removeAttribute("readonly"),void localStorage.removeItem("form-data");if(!n.email||!n.password)return alert("Enter all fields");if(t!==n.email||e!==n.password)return alert("Uncorrect data ");localStorage.setItem("form-data",JSON.stringify(n)),r(),a.currentTarget.reset()})),localStorage.getItem("form-data")&&r()}();
//# sourceMappingURL=index.6d5fb7ff.js.map
