const slugger = require('./index').slugger;
/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        const input= 'string with spaces';
        const output= 'string-with-spaces';

        expect(slugger(input)).toEqual(output);
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        const input= 'string with spaces';
        const input2= 'another string with spaces';
        const output= 'string-with-spaces-another-string-with-spaces';

        expect(slugger(input,input2)).toEqual(output);
    })
})