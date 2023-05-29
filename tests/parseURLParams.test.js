
import parseURLParams from '../src/index.ts'

describe('parseURLParams', () => {
    test('No URL returns an empty array', () => {
        expect(parseURLParams()).toEqual([]);
    });
    test('URL with no template params returns an empty array', () => {
        expect(parseURLParams('https://test.com/')).toEqual([]);
    });
    test('URL with template params returns an array of param names', () => {
        expect(parseURLParams('https://test.com/user/:user_id/comments/:comment_id')).toEqual(['user_id', 'comment_id']);
    });
    test('Path with template params returns an array of param names', () => {
        expect(parseURLParams('/user/:user_id/comments/:comment_id')).toEqual(['user_id', 'comment_id']);
    });
    test('Returns an array of unique param names', () => {
        expect(parseURLParams('/user/:user_id/comments/:comment_id/author/:user_id')).toEqual(['user_id', 'comment_id']);
    });
    test('Ignores invalid params', () => {
        expect(parseURLParams('/user/:user_!id/comments/:comment_id')).toEqual(['comment_id']);
    });
});