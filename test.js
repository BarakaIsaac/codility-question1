function testSolution() {
    const testCase = [
        {input: ["abc", "bca", "dbe"], expected: [0, 2, 1]},
        {input: ["zzzz", "ferz", "zdsr", "fgtd"], expected: [0, 1, 3]},
        {input: ["gr", "sd", "rb"], expected: []},
        {input: ["bdafg", "ceagi"], expected: [0, 1, 2]}
    ];

    for (const testCase of testCase) {
        const result = solution(testCase.input);
        const isEqual = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Input: ${testCase.input}`);
        console.log(`Expected: ${testCase.expected`);
    }
}

testSolution();