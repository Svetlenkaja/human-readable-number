module.exports = function toReadable (number) {
    let result = '';
    
    const unitsMap = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teensMap = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensMap = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0) {
        return 'zero';
    }

    let hundredsPart = Math.floor(number / 100);
    let tensPart = Math.floor((number % 100) / 10);
    let onesPart = number % 10;

 
    
    if (hundredsPart > 0) {
        result += unitsMap[hundredsPart] + ' hundred';
        if (tensPart > 0 || onesPart > 0) {
            result += ' ';
        }
    }
    
    if (tensPart >= 1) {
        result += tensPart == 1 ? teensMap[onesPart] : tensMap[tensPart];
        if (tensPart > 1 && onesPart > 0) {
            result += ' ';
        }
    }
    
    if (tensPart != 1 && onesPart > 0) {
        result += unitsMap[onesPart];
    }
    
    return result;
}
