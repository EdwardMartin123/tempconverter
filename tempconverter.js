const { program } = require('commander')
const { c2f, f2c } = require('./converters')

program.description('CLI to convert Celsius to Fahrenheit and vice versa')

program.command('c2f')
    .description('Convert Celsius to Fahrenheit')
    .requiredOption('-n, --number <value>', 'the temperature value to be converted')
    .action((options) => {
        try {
            console.log(`%d Celsius is %d Fahrenheit`, parseInt(options.number).toFixed(0), c2f(options.number).toFixed(0))
        }
        catch (error) {
            if (error === "NaN") console.log("Enter a valid number")
        }
    })

program.command('f2c')
    .description('Convert Fahrenheit to Celsius')
    .requiredOption('-n, --number <value>', 'the temperature value to be converted')
    .action((options) => {
        try {
            console.log(`%f Fahrenheit is %f Celsius`, parseInt(options.number).toFixed(0), f2c(options.number).toFixed(0))
        }
        catch (error) {
            console.log(error)
            if (error === "NaN") console.log("Enter a valid number")
        }
    })

program.parse()