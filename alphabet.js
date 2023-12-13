// 4. Write a code to print A-Z characters in each line from “ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ”, the print data must be A-Z, with no repeated characters.

const alphaStr = 'ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ'
const newStr = []

// for (const alpha of alphaStr) {
    // if (!newStr.includes(alpha)){
    //     newStr.push(alpha)
    // }
// };

alphaStr.split('').forEach(alpha => {
    if (!newStr.includes(alpha)){
        newStr.push(alpha)
    }
});
console.log(newStr)
console.log('1st:-', newStr.join(''))

const uniqueChars = [...new Set(alphaStr)].sort().join('')
console.log('2nd:-', uniqueChars)