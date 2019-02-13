const isThisAPalindrome = require('./isThisAPalindrome')
const createFactorPairs = require('./createFactorPairs')
const startingValue = 999

const palindromePairs = createFactorPairs(startingValue, isThisAPalindrome)

const bp = palindromePairs[0] //bp == biggest palindrome

console.log(`Given two factors which are <= ${startingValue}, the biggest palindromic number is ${bp.product}, which is ${bp.f1}*${bp.f2}`)