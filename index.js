let caseOf = require('./modules/caseOf')
let snake_case = require('./modules/snake_case')
let MACRO_CASE = require('./modules/MACRO_CASE')
let kebab_case = require('./modules/kebab-case')
let COBOL_CASE = require('./modules/COBOL-CASE')
let camelCase = require('./modules/camelCase')
let PascalCase = require('./modules/PascalCase')



let transformCase = (word, toCase) => {
    let fromCase = caseOf(word)

    if (fromCase == toCase) {
        return word
    }

    else if (fromCase == "snake_case") {
        return snake_case(word, toCase)
    }

    else if (fromCase == "MACRO_CASE") {
        return MACRO_CASE(word, toCase)
    }

    else if (fromCase == "kebab-case") {
        return kebab_case(word, toCase)
    }
        
    else if (fromCase == "COBOL-CASE") {
        return COBOL_CASE(word, toCase)
    }

    else if (fromCase == "camelCase") {
        return camelCase(word, toCase)
    }

    else if (fromCase == "PascalCase") {
        return PascalCase(word, toCase)
    }

    else {
        return word.toLowerCase()
    }
}


module.exports = {
    transformCase,
    caseOf
}