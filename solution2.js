function solution2(S) {
    const n = S.length; //Length of input string
    let maxSymmetricLength = 0; //Initializing maximum symmetric length

    for (let i = 0; i < n; i++) {
        const symmetricLength1 = expandCharacter(i, i, S);
        const symmetricLength2 = expandCharacter(i, i + 1, S);

        maxSymmetricLength = Math.max(maxSymmetricLength, symmetricLength1, symmetricLength2);
    }

    return maxSymmetricLength;
}

function expandCharacter(left, right, S) {
    const n = S.length;
    let symmetricLength = 0; 

    while (left >= 0 && right < n && S[left] === S[right]) {
        symmetricLength += 2;
        left--;
        right++;
    }

    return symmetricLength;
}

const testCases = [
    { input: "<><??>>", expected: 4 },
    { input: "??????", expected: 6 },
    { input: "<<?", expected: 2 }
]

for (const test of testCases) {
    const result = solution2(test.input)
    const isEqual = result === test.expected;
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Result: ${result}`);
    console.log(`Test Passed: ${isEqual}`);
    console.log("----------------------");
}