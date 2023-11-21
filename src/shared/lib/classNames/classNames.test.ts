import { classNames } from "./classNames"

describe('classNames/basic', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('classNames/className_mods_additional', () => {
        expect(classNames('someClass', {'isSelect': true, 'isHover': false}, 
        ['pt-10'])).toBe('someClass pt-10 isSelect')
    })
    test('classNames/empty_string', () => {
        expect(classNames('', {'': true, '': false}, 
        [''])).toBe('')
    })
})

