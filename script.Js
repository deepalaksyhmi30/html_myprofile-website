/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nextPageBtn").addEventListener("click", function() {
        window.location.href = "project1.html";
    });

    // Login validation
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (username === "admin" && password === "password123") {
            alert("Login successful!");
            document.getElementById("projects").style.display = "block";
        } else {
            alert("Invalid username or password");
        }
    });

    // Project details display
    document.querySelectorAll(".view-project").forEach(button => {
        button.addEventListener("click", function() {
            let projectInfo = this.nextElementSibling;
            projectInfo.style.display = projectInfo.style.display === "none" ? "block" : "none";
        });
    });
});
