const okpdTranslater = require('../src/okpd2_to_okpd.js')

console.log(okpdTranslater.get('30.99.10.000')) // [ '31.43.50',
//   '53.84.10',
//   '53.84.20',
//   '53.84.30',
//   '53.84.40',
//   '53.84.50',
//   '53.84.54',
//   '53.84.61',
//   '69.85.60',
//   '96.81.60',
//   '31.71.11',
//   '31.71.12',
//   '31.72.14',
//   '31.72.15' ]
console.log(okpdTranslater.get('99.99.99.999')) //undefined

console.log(okpdTranslater.has('30.99.10.000')) //true
console.log(okpdTranslater.has('99.99.99.999')) //false
