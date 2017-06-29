# Соответствия кодов ОКПД и ОКПД2
=================================
1) **ОКПД => ОКПД2**
```js
  const okpdTranslater = require('../src/okpd_to_okpd2.js')

  console.log(okpdTranslater.get('65.77.30')) // 26.30.40.110
  console.log(okpdTranslater.get('98.96.94')) // 01.46.10.210
  console.log(okpdTranslater.get('98.96.99')) // undefined

  console.log(okpdTranslater.has('65.77.30')) // true
  console.log(okpdTranslater.has('98.96.94')) // true
  console.log(okpdTranslater.has('98.96.99')) // false
```
--------------------------------
2) **ОКПД2 => ОКПД**
```js
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
```
