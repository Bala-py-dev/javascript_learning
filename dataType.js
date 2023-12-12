// 5. Write a code to check the data type of the given input, input should be any of either Boolean type, Null type, String type, Number type, or BigInt type.

const checkDataType = (params) => {
    if (params == null) {
        console.log('null type params')
    } else {
        console.log(typeof(params))
    }
}

checkDataType(null)
checkDataType('test')
checkDataType(true)
checkDataType(4)
checkDataType(BigInt(4))