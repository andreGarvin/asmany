# asmany: simple function repeats a certain task on some data given as many times as you to. 

* I create this module/function because it name was taken on npm and create this function time to time.

```bash
npm i asmany -S
```

```js
const asmany = require('asmany')

/*
    The callback function returns a begin ran returns two things.
    - data: the mutated data being changed.
    - i: the count/number of how many times it ran
    ex: asmany(data, i) => ..., 1, 'blah')
*/
asmany((data) => data + 1, 5, 3) // 8

asmany((data, i) => {
    if (i === 1) {
        return {
            cat: 'meow'
        }
    } else {
        return {
            dog: 'woof'
        }
    }
}, 2, {}) // { cat: 'meow', dog: 'woof' }


const uuid = require('uuid')

const accessToken = asmany((data) => uuid().split('-').join(''), 5, '') // Really long uuid string
```