const isThisAPalindrome = require('./isThisAPalindrome')

function checkIt(input) {
    if (isThisAPalindrome(input)) {
        console.log(`${input} is a palindrome.`)
    } else {
        console.log(`${input} is not a palindrome.`)
    }
}

checkIt(99)
checkIt(101)
checkIt(9109)
checkIt("racecar")
checkIt("neveroddoreven")
checkIt("helloworld")