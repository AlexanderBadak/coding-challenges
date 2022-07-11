import { lodashGetV2 as lodashGet } from './lodash-get'

// get value at a given path

describe('lodash get', () => {
    const person = {
        address: [
            {
                type: 'home',
                street: '123'
            },
            {
                type: 'office',
                street: '456'
            }
        ],
        name: {
            lastname: 'smith'
        }
    }
    test('case 1', () => {
        expect(lodashGet(person, 'address.[0].type')).toBe('home')
    })

    test('case 2', () => {
        expect(lodashGet(person, 'address.[2].street')).toBe(undefined)
    })

    test('case 3', () => {
        expect(lodashGet(person, 'name.[0].lastname')).toBe(undefined)
    })

    test('case 4', () => {
        expect(lodashGet(person, 'name.lastname')).toBe('smith')
    })
})