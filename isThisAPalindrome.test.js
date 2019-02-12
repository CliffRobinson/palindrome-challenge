const isThisAPalindrome = require('./isThisAPalindrome')


test("99: Even numbered palindromic number", ()=> {
    expect(isThisAPalindrome(99)).toBeTruthy()
})

test("98: Even numbered non-palindromic number", ()=> {
    expect(isThisAPalindrome(98)).toBeFalsy()
})