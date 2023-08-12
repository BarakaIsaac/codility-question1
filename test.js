function testSolution() {
    const testCases = [
        {input: ["abc", "bca", "dbe"], expected: [0,2,1]},
        { input: ["zzzz", "ferz", "zdsr", "fgtd"], expected: [0, 1, 3]},
        { input: ["gr", "sd", "rg"], expected: [] },
        {input: ["bdafg", "ceagi"], expected: [0, 1, 2]}
    ];
    for (const test of testCases) {
        const result = solutions(test.input);
        const isEqual = JSON.stringify(result) === JSON.stringify(test.expected);
        console.log(`Input: ${test.input}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result: ${result}`);
        console.log(`Test Passed: ${isEqual}`);
        console.log("----------------------");
    }
}

testSolution();