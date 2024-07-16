function generatePassword(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    function getRandomCharacter(characters) {
        return characters[Math.floor(Math.random() * characters.length)];
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const characterType = Math.floor(Math.random() * 4);
        if (characterType === 0) {
            password += getRandomCharacter(uppercase);
        } else if (characterType === 1) {
            password += getRandomCharacter(lowercase);
        } else if (characterType === 2) {
            password += getRandomCharacter(numbers);
        } else {
            password += getRandomCharacter(specialCharacters);
        }
    }
    return password;
}

// Example usage:
const passwordLength = 12;
const newPassword = generatePassword(passwordLength);
console.log(newPassword);
