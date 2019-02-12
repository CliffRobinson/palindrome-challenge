const isThisAPalindrome = require('./isThisAPalindrome')


test("99: Even numbered palindromic number", ()=> {
    expect(isThisAPalindrome(99)).toBeTruthy()
})

test("98: Even numbered non-palindromic number", ()=> {
    expect(isThisAPalindrome(98)).toBeFalsy()
})

test("101: Odd numbered palindromic number", ()=> {
    expect(isThisAPalindrome(101)).toBeTruthy()
})

test("103: Odd numbered non-palindromic number", ()=> {
    expect(isThisAPalindrome(103)).toBeFalsy()
})

test("racecar: palindromic odd numbered string", ()=> {
    expect(isThisAPalindrome("racecar")).toBeTruthy()
})

test("bacecar: non-palindromic odd numbered string", ()=> {
    expect(isThisAPalindrome("bacecar")).toBeFalsy()
})

test("neveroddoreven: even numbered palindromic string", ()=> {
    expect(isThisAPalindrome("neveroddoreven")).toBeTruthy()
})

test("leveroddoreven: even numbered non-palindromic string", ()=> {
    expect(isThisAPalindrome("leveroddoreven")).toBeFalsy()
})