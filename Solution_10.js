function wordCount(sentence) {
    const wordFrequencyMap = new Map();
    const words = sentence.split(/\s+/);
    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', '');
        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1)
        }
    }
    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important";
const result = wordCount(sentence);

console.log(result)