const { test } = require('ava')
const asmany = require('./')

test('number', t => {
    t.is(asmany(data => data += 1, 2, 3), 5)
})

test('object', t => {
    const result = asmany((data, i) => {
            if (i === 1) {
                return {
                    cat: 'meow'
                }
            } else {
                return {
                    dog: 'woof'
                }
            }
        }, 2, {})
    t.deepEqual(result, {
        cat: 'meow',
        dog: 'woof'
    })
})

test('array', t => {
    const result = asmany(data => {
            return [3, 2, 1]
        }, 2, [1, 2, 3])
    t.deepEqual(result, [1,2,3,3,2,1,3,2,1])
})

test('string', t => {
    const result = asmany(data => {
            return data += 'jo'
        }, 1, 'jo')
    t.is(result, 'jojo')
})