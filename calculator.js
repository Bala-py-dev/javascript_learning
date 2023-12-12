// 3. Write a code for a calculator which should perform all arithmetic operations using a common user-defined function only, a user must have to give 2 inputs the operator and operands values.

const calculator = (num1, num2, operator) => {
    if (!num1 || !num2 || !operator) {
        console.log('Please enter Proper number or operator')
    }else{
        if (operator === '+') {
            console.log('Addition:-', num1+num2)
        } else if (operator === '-') {
            console.log('Subtraction:-', num1-num2)
        } else if (operator === '*') {
            console.log('Multiplication:-', num1*num2)
        } else {
            console.log('Division:-', num1/num2)
        }
    }
}

calculator(5,5,'+')
calculator(5,5,'-')
calculator(5,5,'*')
calculator(5,5,'/')