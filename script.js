const randomPDisplay = document.querySelector(".randomPassword .randomDisplay input");
const copyBtn = document.querySelector(".fas");
const copyActive = document.querySelector(".far");
const input_btn = document.querySelector(".input_btn");

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#!?/_"

randomPDisplay.value = "";

input_btn.addEventListener("click", () => {
    copyBtn.style.display = "block";
    copyActive.style.display = "none";

    let password = "";

    for(let i = 0; i < 16; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    randomPDisplay.value = password;
})

copy = () => {
    copyBtn.style.display = "none";
    copyActive.style.display = "block";
    randomPDisplay.select();
    document.execCommand('copy');
}