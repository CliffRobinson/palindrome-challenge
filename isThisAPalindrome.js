
function isThisAPalindrome(input) {
    const inputArray = input.toString().split(""); 
    //Treat the input as a string, and store each character in an array.  
    
    var last = inputArray.length -1

    for (var first = 0; first < last; first++) {
        //console.log(`Comparing index ${first} to index ${last}.\n${inputArray[first]} != ${inputArray[last]}? ${inputArray[first] != inputArray[last]}`)
        if (inputArray[first] != inputArray[last]) {
            return false
        }
        last--;
    }

    return true;


}

module.exports = isThisAPalindrome; 