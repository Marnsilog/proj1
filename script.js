// script.js

document.addEventListener("DOMContentLoaded", function() {
    try {
        let btnSignup = document.getElementById("btnSignup");
        let btnLogIn = document.getElementById("btnLogIn");
        let nameFeild = document.getElementById("nameFeild");
        let title = document.getElementById("title");

        if (!btnSignup || !btnLogIn || !nameFeild || !title) {
            throw new Error("One or more elements not found.");
        }

        btnLogIn.onclick = function() {
            try {
                nameFeild.style.maxHeight = "0";
                title.innerHTML = "Log In";
                btnSignup.classList.add("disable");
                btnLogIn.classList.remove("disable");
            } catch (error) {
                console.error("Error occurred while performing Log In action:", error);
            }
        };

        btnSignup.onclick = function() {
            try {
                nameFeild.style.maxHeight = "60px";
                title.innerHTML = "Sign Up";
                btnLogIn.classList.add("disable");
                btnSignup.classList.remove("disable");
            } catch (error) {
                console.error("Error occurred while performing Sign Up action:", error);
            }
        };
    } catch (error) {
        console.error("Error occurred during initialization:", error);
    }
});
