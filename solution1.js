function solution1(S){
    const n = S.length;
    const m = S[0].length;

    for (let pos = 0; pos < m; pos++) {
        const charSet = new Set();

        for (let i = 0; i < n; i++) {
            charSet.add(S[i][pos]);
        }

        if (charSet.size < n) {
            const pairIndexes = [];
            for (let i = 0; i < n; i++) {
                if (S[i][pos] === Array.from(charSet)[0]) {
                    pairIndexes.push(i);
                }
        }

        return [pairIndexes[0], pairIndexes[1], pos];
    }
}
return [];
}

const testCases = [
    { input: ["abc", "bca", "dbe"], expected: [0, 2, 1] },
    { input: ["zzzz", "ferz", "zdsr", "fgtd"], expected: [0, 1, 0] },
    { input: ["gr", "sd", "rg"], expected: [] },
    { input: ["bdafg", "ceagi"], expected: [0, 1, 2] }
];

for (const test of testCases) {
    const result = solution1(test.input);
    const isEqual = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Result: ${result}`);
    console.log(`Test Passed: ${isEqual}`);
    console.log("----------------------");
}