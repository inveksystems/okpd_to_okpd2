const okpdTranslater = require('../src/okpd_to_okpd2.js')

console.log(okpdTranslater.get('65.77.30')) // [ '26.30.40.110' ]
console.log(okpdTranslater.get('98.96.91')) // [ '01.41.10.120', '01.42.11.120' ]
console.log(okpdTranslater.get('99.99.99')) // undefined

console.log(okpdTranslater.has('65.77.30')) // true
console.log(okpdTranslater.has('98.96.91')) // true
console.log(okpdTranslater.has('99.99.99')) // false
