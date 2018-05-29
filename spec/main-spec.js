const main = require('../main/main');

describe('main()', () => {
    it('4A0B', () => {
        var result = main.main('1234');
        expect('4A0B').toEqual(result)
    })

    it('0A4B', () => {
        var result = main.main('4321');
        expect('0A4B').toEqual(result)
    })

    it('3A0B', () => {
        var result = main.main('6234');
        expect('3A0B').toEqual(result)
    })

    it('0A3B', () => {
        var result = main.main('6321');
        expect('0A3B').toEqual(result)
    })

    it('1A1B', () => {
        var result = main.main('6247');
        expect('1A1B').toEqual(result)
    })

    it('0A0B', () => {
        var result = main.main('6789');
        expect('0A0B').toEqual(result)
    })
});


