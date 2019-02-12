
function defaultFilter() {
    return true;
}

function createFactorPairs(startingValue, filterfunction = defaultFilter) {
    const outputArray = []

    for (var f1 = startingValue; f1 > 0; f1--){ //f1 == the first factor
        for (var f2 = f1; f2 > 0; f2--){ //f2 == second factor
            //you can initialise f2 to startingvalue, but this will create duplicates of every factor pair. 
            const product = f1*f2
            if(filterfunction(product)) {
                //console.log(`${f1}*${f2} == ${product}, which is a palindrome`)
                outputArray.push({
                    f1,
                    f2,
                    product
                })
            }
        }
    }
    outputArray.sort((pair1,pair2) => (pair2.product - pair1.product)) 
    //The sort is in the reverse of the usual order because we want to sort from largest to smallest. 

    return outputArray
}

module.exports = createFactorPairs