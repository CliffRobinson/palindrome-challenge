const itap = require('./isThisAPalindrome')

const startingValue = 999
const palindromePairs = [];

for (var i = startingValue; i > 0; i--){
    for (var j = startingValue; j > 0; j--){
        const product = i*j
        if(itap(product)) {
            //console.log(`${i}*${j} == ${product}, which is a palindrome`)
            palindromePairs.push({
                factorI:i,
                factorJ:j,
                product:product
            })
        }
    }
}
//console.log(palindromePairs)
palindromePairs.sort((a,b) => (b.product - a.product)) //sort the array from largest to smallest

const bp = palindromePairs[0] //bp == biggest palindrome

console.log(`The biggest palindromic number is ${bp.product}, which is ${bp.factorI}*${bp.factorJ}`)