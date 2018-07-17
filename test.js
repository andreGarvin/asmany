const { test } = require('ava')
const asmany = require('./')

test('Plus 1 on each iteration, initial state is 3', t => {
    t.is(asmany(data => data += 1, 2, 3), 5)
})

test('Combining a object together on each iteration with initial state', t => {
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

test('Concating arrays on each iteration with initial state array', t => {
    const result = asmany(data => {
        return [3, 2, 1]
    }, 2, [1, 2, 3])
    t.deepEqual(result, [1,2,3,3,2,1,3,2,1])
})

test('Concating strings on each iteration to state', t => {
    const result = asmany(data => {
        return data += 'jo'
    }, 1, 'jo')

    t.is(result, 'jojojo')
})

test('Combining strings together on two interations not concating with state', t => {
    const uids = [ Math.random().toString(16).slice(2), Math.random().toString(16).slice(2) ]
    const uidString = asmany((_, i) => uids[i], 2, '')

    t.is(uidString, uids.join(''))
})

test('Pushing number to array on each interation', t => {
    const arr = asmany((_, i) => i, 4, [])

    t.deepEqual(arr, [0, 1, 2, 3])
})

test('Concating a array of numbers into initial state', t => {
    const arr = asmany((data, i) => [i], 3, [])

    t.deepEqual(arr, [0, 1, 2])
})

test('iteration number PLUS 2 and setting that to inital data state', t => {
    const number = asmany((_, i) => (2 + i), 5, 3)
    t.is(number, 6)
})

test('Combining objects together using "data" arguement on each iteration', t => {
    const collectionObject = asmany((data, i) => Object.assign({ [i]: { name: 'hello' } }, data), 5, {})

    t.deepEqual(
        collectionObject,
        {
            '0': { name: 'hello' },
            '1': { name: 'hello' },
            '2': { name: 'hello' },
            '3': { name: 'hello' },
            '4': { name: 'hello' }
        }
    )
})

test('Combing a object into the initial data state', t => {
    const object = asmany((_, x) => ({ name: 'hello' }), 5, {})

    t.deepEqual(
        object,
        { name: 'hello' }
    )
})

test('Pushing a object into the array on each interation', t => {
    const arrayOfObjects = asmany((_, x) => ({ name: 'hello' }), 5, [])

    t.deepEqual(
        arrayOfObjects,
        [
            { name: 'hello' },
            { name: 'hello' },
            { name: 'hello' },
            { name: 'hello' },
            { name: 'hello' },
        ]
    )
})
