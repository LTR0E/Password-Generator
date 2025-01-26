// JavaScript – Password Generator 

const generateButton = document.getElementById("generate-button");
const passwordInput = document.getElementById("input");
const copyButton = document.getElementById("copy-button");
const lengthInput = document.getElementById("length");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");

//Password Character Set Elements
const lowercaseCheckbox = document.getElementById("lowercase-checkbox");
const uppercaseCheckbox = document.getElementById("uppercase-checkbox");
const numericCheckbox = document.getElementById("numeric-checkbox");
const specialCheckbox = document.getElementById("special-checkbox");

function generateRandomPassword(length = 12, options = {lowercase: true, uppercase: true, numbers: true, symbols: true}) {
    let password = "";
    let characters = "";

    if (options.lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (options.uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.numbers) characters += "0123456789";
    if (options.symbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

generateButton.addEventListener("click", () => {
    const options = {
        lowercase: lowercaseCheckbox.checked,
        uppercase: uppercaseCheckbox.checked,
        numbers: numericCheckbox.checked,
        symbols: specialCheckbox.checked
    };

    
    if (lengthInput.value === "") {
        alert("Please select a password length...");
        passwordInput.placeholder = "Please select a password length...";
        passwordInput.style.color = "red";
    } else if (parseInt(lengthInput.value) <= 0) {
        alert("Password length must be greater than 0...");
        passwordInput.placeholder = "Length must be greater than 0...";
        passwordInput.style.color = "red";
    } else if (options.lowercase === false && options.uppercase === false && options.numbers === false && options.symbols === false) {
        alert("Please select at least one character type...");
        passwordInput.placeholder = "Select at least one character type...";
        passwordInput.style.color = "red";
    } else {
        const password = generateRandomPassword(parseInt(lengthInput.value), options);
        passwordInput.value = password;
        passwordInput.style.color = "green";
    }
        


});

copyButton.addEventListener("click", () => {
    if (passwordInput.value === "") {
        alert("Please generate a password first...");
        return;
    } else {
    alert(`${passwordInput.value} has been copied to clipboard!`);
    }
    passwordInput.select();
    document.execCommand("copy");
});


lengthInput.addEventListener("input", () => {
    const options = {
        lowercase: lowercaseCheckbox.checked,
        uppercase: uppercaseCheckbox.checked,
        numbers: numericCheckbox.checked,
        symbols: specialCheckbox.checked
    };

    if (parseInt(lengthInput.value) > 0) {
        const password = generateRandomPassword(parseInt(lengthInput.value), options);
        passwordInput.style.color = "green";
        passwordInput.value = password;
    } else {
        passwordInput.style.color = "red";
    }
});


incrementButton.addEventListener("click", () => {
    lengthInput.value++;
});

decrementButton.addEventListener("click", () => {
    lengthInput.value--;
});