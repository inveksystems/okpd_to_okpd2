const okpdTranslater = require('../src/okpd_to_okpd2.js')

console.log(okpdTranslater.get('65.77.30')) // 26.30.40.110
console.log(okpdTranslater.get('98.96.94')) // 01.46.10.210
console.log(okpdTranslater.get('98.96.99')) // undefined

console.log(okpdTranslater.has('65.77.30')) // true
console.log(okpdTranslater.has('98.96.94')) // true
console.log(okpdTranslater.has('98.96.99')) // false
