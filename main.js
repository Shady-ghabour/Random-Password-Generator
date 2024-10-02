const input = document.querySelector(".in");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".fa-copy")
const div = document.querySelector(".copy-alert");

function generatePassword(){
    const char = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const length = 15;
    let password = "";

    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * char.length);
        password += char.substring(random, random + 1);
        console.log(password);
    }
    console.log(input);
    input.value = password;
    div.textContent = password + " copied"; 
}

function copyText(){
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);   
}

btn.addEventListener("click", generatePassword);
copy.addEventListener("click", () => {
    copyText();
    if (input.value) {
      div.classList.remove("active");
      setTimeout(() => {
        div.classList.add("active");
      }, 2000);
    }
  });
