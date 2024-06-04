document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("login-modal");
    const loginLink = document.getElementById("login-link");
    const closeButton = document.querySelector(".close-button");
    const loginForm = document.getElementById("login-form");
    const registerModal = document.getElementById("register-modal");
    const registerLink = document.getElementById("register-link");
    const closeRegisterButton = document.querySelector(".close-register-button");

    loginLink.onclick = function() {
        modal.style.display = "block";
    };

    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    registerLink.onclick = function() {
        modal.style.display = "none";
        registerModal.style.display = "block";
    };

    closeRegisterButton.onclick = function() {
        registerModal.style.display = "none";
    };

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 模擬登入驗證
        if (username === "user" && password === "password") {
            window.location.href = "0603.html"; // 登入成功後重定向的頁面
        } else {
            alert("使用者名稱或密碼錯誤");
        }
    });
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    };
});
