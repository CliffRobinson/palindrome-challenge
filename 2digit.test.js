const itap = require('./isThisAPalindrome')
const cfp = require('./createFactorPairs')

test("check progamme gets correct answer for largest palindrome of 1 digit numbers", ()=> {
    const startingValue = 9
    const palindromePairs = cfp(startingValue, itap)
    expect(palindromePairs[0].product).toEqual({f1:9, f2:1, product:9})
})

test("check progamme gets correct answer for largest palindrome of 2 digit numbers", ()=> {
    const startingValue = 99
    const palindromePairs = cfp(startingValue, itap)
    expect(palindromePairs[0]).toEqual({f1:99, f2:91, product:9009})
})