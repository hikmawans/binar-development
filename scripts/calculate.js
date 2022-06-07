const sum = require('./common-function')

function hitungBunga(saldo , bunga) {
    let totalSaldo = sum (saldo, bunga)
    return totalSaldo
}

console.log(hitungBunga(100000, 10000))