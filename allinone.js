/*
A palindrome number reads same both ways, example 91019, 112211. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99. Find the largest palindrome number made from the product of two 3-digit numbers.
*/

function isThisAPalindrome(input) {
    const charArray = input.toString().split(""); 
    //Treat the input as a string, and store each character in an array.  
    
    var last = charArray.length -1

    for (var first = 0; first < last; first++) {
        //console.log(`Comparing index ${first} to index ${last}.\n${charArray[first]} != ${charArray[last]}? ${charArray[first] != charArray[last]}`)
        if (charArray[first] != charArray[last]) {
            return false
        }
        last--;
        //Compare the first letter to the last, then the second to the second last, and so on. For strings of odd-numbered lengths, the middle number doesn't need to be tested. 
    }
    return true;
    //Only if all the comparisons are equal will the function return true.
}

function defaultFilter() {
    return true;
}

function createFactorPairs(startingValue, filterfunction = defaultFilter) {
    //We will use the isThisAPalindrome function to filter out factor pairs that don't produce palindromic numbers,
    //but for the purpose of testing I want to make sure that the function can be configured to create all pairs.
    const outputArray = []

    for (var f1 = startingValue; f1 > 0; f1--){ //f1 == the first factor
        for (var f2 = f1; f2 > 0; f2--){ //f2 == second factor
            //you can initialise f2 to startingvalue, but this will create duplicates of every factor pair. 
            const product = f1*f2
            if(filterfunction(product)) {
                //console.log(`${f1}*${f2} == ${product}`)
                outputArray.push({
                    f1,
                    f2,
                    product
                })
            }
        }
    }
    outputArray.sort(
        (pair1,pair2) => {
                const productDiff = (pair2.product - pair1.product)
                return ((productDiff) != 0) 
                    ? productDiff
                    : (pair2.f1 - pair1.f1)
        })
    //This sorts by size of product, and if products are the same, use size of the first factor as a tie-breaker. 
    //The sort is in the reverse of the usual order because we want to sort from largest to smallest.

    return outputArray
}

const startingValue = 999

const palindromePairs = createFactorPairs(startingValue, isThisAPalindrome)

const bp = palindromePairs[0] //bp == biggest palindrome

console.log(`The biggest palindromic number is ${bp.product}, which is ${bp.f1}*${bp.f2}`)

