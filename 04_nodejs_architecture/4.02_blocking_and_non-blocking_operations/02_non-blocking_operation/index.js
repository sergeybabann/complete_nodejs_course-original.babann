const fs = require('fs')
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log('File reading finished')
    }
})

console.log('Continue...') // выполняется до окончания чтения файла


