exports.c2f = temp => {
    if (this.validateNumber(temp)) return 32+9*temp/5
    else throw "NaN"
}

exports.f2c = temp => {
    if (this.validateNumber(temp)) return 5*(temp-32)/9
    else throw "NaN"
}

exports.validateNumber = number => {
    if (isNaN(number)) return false // catches anything that isn't a number
    else return true
}