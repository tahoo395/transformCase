let caseOf = (word) => {
    let isSmallLetter = word.charCodeAt(0)>=97 && word.charCodeAt(0)<=122
    let isCapitalLetter = word.charCodeAt(0) >= 65 && word.charCodeAt(0)<= 90
    

    
    if (Boolean(word.match(/_/g)) && /[a-z]/g.test(word) && !/[A-Z]/g.test(word)) {
        return "snake_case"
    }
    
    else if (Boolean(word.match(/_/g)) && !/[a-z]/g.test(word) && /[A-Z]/g.test(word)) {
        return "MACRO_CASE"
    }
    
    else if (Boolean(word.match(/-/g)) && /[a-z]/g.test(word) && !/[A-Z]/g.test(word)) {
        return "kebab-case"
    }
    
    else if (Boolean(word.match(/-/g)) && !/[a-z]/g.test(word) && /[A-Z]/g.test(word)) {
        return "COBOL-CASE"
    }
    
    else if (isSmallLetter && Boolean(word.match(/[A-Z]/g))) {
        return "camelCase"
    }

    else if (isCapitalLetter && Boolean(word.match(/[A-Z]/g))) {
        return "PascalCase"
    }

    else {
        return "flatcase"
    }
}

module.exports = caseOf