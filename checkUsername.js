// 1. Write a code to check whether the given username is available in 15 names or not, if the username is found then print the given username’s position and also print all the user usernames till the found user name.


const userName = ['anil', 'prakash', 'ajay', 'nirav', 'nitesh', 'rohit', 'bala']
const checkUserName = (nameStr) => {
    const position = userName.indexOf(nameStr);
    if (nameStr && userName.includes(nameStr)){
        console.log('Available user name is:-', nameStr,'\nPosition is:-', position)
    } else {
        console.log('Not available user name is:- ', nameStr)
    }
}

checkUserName('bala');