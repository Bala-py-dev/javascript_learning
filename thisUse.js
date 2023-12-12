// 10. How can you attach `this` to the object so that the code below won’t return undefined?

/*
const Hamilton = {
    writesLikeHesRunningOutOfTime: true,
    frenemy: "Aaron Burr",
        greeting() {
        console.log(`Pardon me, are you ${this.frenemy},
        sir?`)
        }
    }
setTimeout(Hamilton.greeting, 1000)
// Pardon me, are you undefined, sir?
*/

const Hamislton = {
    writesLikeHesRunningOutOfTime: true,
    frenemy: "Aaron Burr",
    greeting() {
        console.log(`Pardon me, are you ${this.frenemy}, sir?`);
    }
};

setTimeout(() => Hamislton.greeting(), 1000);
Hamislton.greeting()