const itap = require('./isThisAPalindrome')
const cfp = require('./createFactorPairs')
const startingValue = 999

const palindromePairs = cfp(startingValue, itap)

const bp = palindromePairs[0] //bp == biggest palindrome

console.log(`The biggest palindromic number is ${bp.product}, which is ${bp.f1}*${bp.f2}`)