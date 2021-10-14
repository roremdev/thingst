import supertest from 'supertest';

import app from '../index';

const request = supertest(app);

beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(jest.fn());
});

/**
 * @description colleciton of tests cases on root request
 * @param {string} - case name
 */
describe('routes', () => {
    describe('GET /', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.get('/');
            expect(status).toBe(200);
            expect(typeof response.message).toBe('string');
        });
    });
});

/**
 * @description colleciton of test cases on task request
 * @param {string} - case name
 */
describe('routes', () => {
    describe('GET /task', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.get('/task');
            expect(status).toBe(200);
            expect(Array.isArray(response.data)).toBeTruthy();
        });
    });
});
