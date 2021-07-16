let COBOL_CASE = (word, toCase) => {
    if (toCase == "snake_case") {
        return word.replace('-','_').toLowerCase()
    }
    else if (toCase == "MACRO_CASE") {
        return word.replace('-','_').toUpperCase()
    }
    else if (toCase == "kebab-case") {
        return word.toLowerCase()
    }
    else if (toCase == "camelCase") {
        let splitWord = word.toLowerCase().split('-')
        let result=[]
    
        for(let index=1 ; index < splitWord.length ; index++){
            result.push(splitWord[index].charAt(0).toUpperCase()+splitWord[index].slice(1))
        }
    
        return splitWord[0] + result.join('')
    }
    else if (toCase == "PascalCase") {
        let splitWord = word.toLowerCase().split('-')
        let result=[]
    
        for(let index=0 ; index < splitWord.length ; index++){
            result.push(splitWord[index].charAt(0).toUpperCase()+splitWord[index].slice(1))
        }
    
        return result.join('')
    }
}

module.exports = COBOL_CASE