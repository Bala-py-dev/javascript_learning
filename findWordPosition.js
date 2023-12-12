// 6. Write a code to find specific word positions from a paragraph, print that word length,and also print the last 3 characters of the word.

const demoParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."

const wordsplit = demoParagraph.split(' ')

const findWordPosition = (params) => {
    if(wordsplit.includes(params)) {
        console.log('Position:-', wordsplit.indexOf(params), '\nLength:-',wordsplit[wordsplit.indexOf(params)].length, '\nLast 3 Char:-', wordsplit[wordsplit.indexOf(params)].slice(-3))
    }
}

findWordPosition('pisi')