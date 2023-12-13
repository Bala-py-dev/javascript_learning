// 2. Write a code to check the user-entered password should have min length of 6 and a max length of 14 characters, the first character must be in upper case, and the password must contain lower case, upper case, numbers, and special characters.


const isValidPassword = (password) => {
    const regex = /^([A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,14}$/;
    return regex.test(password);
}

const userEnteredPassword = "Aaa12@12Aaa12@12Aaa12@12Aaa12@12";
if (isValidPassword(userEnteredPassword)) {
    console.log("Password is valid");
} else {
    console.log("Password is not valid");
}