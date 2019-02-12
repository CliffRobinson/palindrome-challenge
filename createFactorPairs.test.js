const cfp = require('./createFactorPairs')

test("create factor pairs where max value is 3", ()=> {
    const testArray = cfp(3)
    expect(testArray).toEqual([
        {f1:3, f2:3, product:9},
        {f1:3, f2:2, product:6},
        {f1:2, f2:2, product:4},
        {f1:3, f2:1, product:3},
        {f1:2, f2:1, product:2},
        {f1:1, f2:1, product:1},
    ])
})

test("create factor pairs where max value is 5", ()=> {
    const testArray = cfp(5)

    expect(testArray[0]).toEqual({f1:5, f2:5, product:25})
    expect(testArray[1]).toEqual({f1:5, f2:4, product:20})
    expect(testArray[2]).toEqual({f1:4, f2:4, product:16})
    expect(testArray[3]).toEqual({f1:5, f2:3, product:15})
    expect(testArray[4]).toEqual({f1:4, f2:3, product:12})
    expect(testArray[5]).toEqual({f1:5, f2:2, product:10})
    expect(testArray[6]).toEqual({f1:3, f2:3, product:9})
    expect(testArray[7]).toEqual({f1:4, f2:2, product:8})
    expect(testArray[8]).toEqual({f1:3, f2:2, product:6})
    expect(testArray[9]).toEqual({f1:5, f2:1, product:5})
    
    expect(testArray[10].product).toEqual(4)
    expect(testArray[10].f1*testArray[10].f2).toEqual(4)
    expect(testArray[11].product).toEqual(4)
    expect(testArray[11].f1*testArray[11].f2).toEqual(4)
    //These four lines mean the test will pass if the factor pairs 2-2 and 4-1 are in either position 10 or 11 regardless of order.
    //I want to do this because whether or not the sort function in JS is stable is browser/context dependent, 
    //and I want my JS to work regardless of where you test it (seems like it is stable in nodejs where I'm writing it)
    //In a commercial environment I'd use a third party sorting algorithm that I know is stable, but here I want the code to have
    //minimal dependencies so it's easier for you to look at it and run it if you want. 
    expect(testArray[12]).toEqual({f1:3, f2:1, product:3})
    expect(testArray[13]).toEqual({f1:2, f2:1, product:2})
    expect(testArray[14]).toEqual({f1:1, f2:1, product:1})
})