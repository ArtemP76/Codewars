function smash (words) {
    let finalSentence = ''; // Initialize an empty string to store the sentence
    for (let i = 0; i < words.length; i++) { //  Loop through each word in the array
        finalSentence += words[i] // Concatenate each word to the sentence with a space
        if (i < words.length - 1) { //Add a space after each word, except for the last word
            finalSentence += ' ';
        }
    }
    finalSentence = finalSentence.trim() // Trim any extra spaces at the beginning or end of the sentence
    return finalSentence
}

/*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence
and returns the sentence. You can ignore any need to sanitize words or add punctuation,
but you should add spaces between each word. Be careful, there shouldn't be a space
at the beginning or the end of the sentence!*/