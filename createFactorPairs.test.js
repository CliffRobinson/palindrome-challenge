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