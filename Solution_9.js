function findUniqueChars(input) {
    const CharSet = new Set();

    for (const char of input) {
        if (CharSet.has(char)) {
            console.log(`Input '${input}' Contains duplicate charactors`)
            return false;
        }
        CharSet.add(char);
    }
    console.log(`Input '${input}' Contains only unique charactos`)
    return true;
}

findUniqueChars("anas")
findUniqueChars("Malik")
findUniqueChars("Azeem")
