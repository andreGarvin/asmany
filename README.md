# asmany: simple function repeats a certain task on some data given as many times as you to. 

* I create this module/function because it name was taken on npm and create this function time to time.

```bash
npm i asmany -S
```

```js
const asmany = require('asmany')

/*
    The callback function returns a begin ran returns two things.
    - the count/number of how many times it ran
    - the mutated data being changed.
    ex: asmany(i, data) => ..., 1, 'blah')
*/
asmany((data) => data + 1, 5, 3) // 8
```