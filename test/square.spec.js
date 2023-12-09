const expect = require('must')
const { square } = require('../square.js')

describe('squqre', () => {
    it('without parameters should return a default value', () => {
        expect(square()).to.equal(["XXX","X X","XXX"].join('\n'))
    })
    it('empty object as parameter should return a default value', () => {
        expect(square({})).to.equal(["XXX","X X","XXX"].join('\n'))
    })
    it('Value of key length with data type number greater than 0 should be used as page length', () => {
        expect(square({ length: 3 })).to.equal(["XXX","X X","XXX"].join('\n'))
    })
    it('Value of key char with data type string to be used as character for square', () => {
        expect(square({ length: 4, char: "5" })).to.equal(["5555","5  5","5  5","5555"].join('\n'))
    })
    it('value of key fill with data type boolean and is equal to true should fill square', () => {
        expect(square({length: 3, fill: true })).to.equal(["XXX","XXX","XXX"].join('\n'))
    })
    it('Value of key fill with data type boolean and equal to false should not fill square', () => {
        expect(square({ length: 4, fill: false })).to.equal(["XXXX","X  X","X  X","XXXX"].join('\n'))
    })  
})