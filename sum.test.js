import sum from "./sum.js";

describe("sum module", ()=> {
    test("adds 2 and 2 to equals 4", ()=> {
    expect(sum(2,2)).toBe(4);
});

test("adds -5 and 5 to equals 0", ()=> {
    expect(sum(-5,5)).toBe(0);
})

});