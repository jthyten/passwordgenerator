function generateRandomPassword(passwordLength, excludeNumbers, excludeSymbols) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?/`~';

  let allChars = lowerCaseLetters + upperCaseLetters;

  if (!excludeNumbers) {
    allChars += numbers;
  }
  if (!excludeSymbols) {
    allChars += symbols;
  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

function generateFormattedPassword() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  let password = '';
  password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  password += '';
  for (let i = 0; i < 5; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return password;
}

document.addEventListener('DOMContentLoaded', () => {
  const password = generateRandomPassword(12, false, false);
  document.getElementById('passwordDisplay').value = password;
});

document.getElementById('generatePassword').addEventListener('click', () => {
  const passwordLength = document.getElementById('passwordLengthSlider').value;
  const excludeNumbers = document.getElementById('excludeNumbers').checked;
  const excludeSymbols = document.getElementById('excludeSymbols').checked;
  const password = generateRandomPassword(passwordLength, excludeNumbers, excludeSymbols);
  document.getElementById('passwordDisplay').value = password;
});

document.getElementById('generateFormattedPassword').addEventListener('click', () => {
  const password = generateFormattedPassword();
  document.getElementById('passwordDisplay').value = password;
});

document.getElementById('copyToClipboard').addEventListener('click', () => {
  const password = document.getElementById('passwordDisplay').value;
  const messageDisplay = document.getElementById('messageDisplay');
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      messageDisplay.textContent = 'Password copied to clipboard!';
      messageDisplay.style.opacity = 1;
      setTimeout(() => {
        messageDisplay.style.opacity = 0;
      }, 2000);
    }).catch(err => {
      messageDisplay.textContent = 'Error copying password to clipboard: ' + err;
      messageDisplay.style.opacity = 1;
      setTimeout(() => {
        messageDisplay.style.opacity = 0;
      }, 2000);
    });
  } else {
    messageDisplay.textContent = 'Please generate a password first.';
    messageDisplay.style.opacity = 1;
    setTimeout(() => {
      messageDisplay.style.opacity = 0;
    }, 2000);
  }
});

const passwordLengthSlider = document.getElementById('passwordLengthSlider');
passwordLengthSlider.addEventListener('input', () => {
  document.getElementById('passwordLengthDisplay').textContent = passwordLengthSlider.value;
});
