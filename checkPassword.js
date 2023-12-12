// 2. Write a code to check the user-entered password should have min length of 6 and a max length of 14 characters, the first character must be in upper case, and the password must contain lower case, upper case, numbers, and special characters.


const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,14}$/;
const checkPassword = (password) => {
    if (password && passwordRegex.test(password)){
        console.log(true)
    } else {
        console.log(false)
    }
};

checkPassword('A11@@@Aaaa');