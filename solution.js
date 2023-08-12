function solutions(S){
    const charPositions = {};

    for (let i = 0;i < S.length; i++) {
        const str = S[i];
        for (let j = 0; j < str.length; j++) {
            const char = str [j];
            if (!charPositions[char]) {
                charPositions[char] = [];
            }
            charPositions[char].push ([i, j]);
    }
    }
    //Iterate and find a pair of strings that share a common letter
    for (const char in charPositions) {
        const positions = charPositions[char];
        if (positions.length > 1) {
            const [stringIndex1, position1] = positions[0];
            const [stringIndex2, position2] = positions[1];
            return [stringIndex1, stringIndex2, positions1];
        }
    }
    return [];
}
