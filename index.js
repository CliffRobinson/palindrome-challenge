const itap = require('./isThisAPalindrome')

const startingValue = 99

for (var i = startingValue; i > 0; i--){
    for (var j = startingValue; j > 0; j--){
        const product = i*j
        if(itap(product)) {
            console.log(`${i}*${j} == ${product}, which is a palindrome`)
        }
    }
}