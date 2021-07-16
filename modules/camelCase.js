let camelCase = (word, toCase) => {
    let lettersWithoutFirst = word.match(/[A-Z][a-z]+/g)
    let firstLetter = word.slice(0,word.indexOf(lettersWithoutFirst[0]))
    let letters = [firstLetter]
    lettersWithoutFirst.forEach(letter => {
        letters.push(letter)
    })

    if (toCase == 'snake_case') {
        return letters.join('_').toLowerCase()
    }

    else if (toCase == 'MACRO_CASE') {
        return letters.join('_').toUpperCase()
    }

    else if (toCase == 'kebab-case') {
        return letters.join('-').toLowerCase()
    }
        
    else if (toCase == 'COBOL-CASE') {
        return letters.join('-').toUpperCase()
    }

    else if (toCase == 'PascalCase') {
        return word[0].toUpperCase() + word.slice(1)
    }

}

module.exports = camelCase