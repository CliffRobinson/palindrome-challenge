const createFactorPairs = require('./createFactorPairs')

test("create factor pairs where max value is 3", ()=> {
    const testArray = createFactorPairs(3)
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
    const testArray = createFactorPairs(5)

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
    expect(testArray[10]).toEqual({f1:4, f2:1, product:4})
    expect(testArray[11]).toEqual({f1:2, f2:2, product:4})
    expect(testArray[12]).toEqual({f1:3, f2:1, product:3})
    expect(testArray[13]).toEqual({f1:2, f2:1, product:2})
    expect(testArray[14]).toEqual({f1:1, f2:1, product:1})
})