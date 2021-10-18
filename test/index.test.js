import { describe } from 'pm2';
import supertest from 'supertest';

import app from '../src/index';

const request = supertest(app);

beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(jest.fn());
});

/**
 * @description colleciton of tests cases on root request
 * @param {string} - case name
 */
describe.skip('routes', () => {
    describe('GET /', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.get('/');
            expect(status).toBe(200);
            expect(typeof response.data).toBe('string');
        });
    });
});

/**
 * @description colleciton of test cases on task request
 * @param {string} - case name
 */
describe.skip('routes', () => {
    describe('GET /task', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.get('/task');
            expect(status).toBe(200);
            expect(Array.isArray(response.data)).toBeTruthy();
        });
    });
    describe('POST /task', () => {
        it('should respond with a json', async () => {
            const { status, body: response } = await request.post('/task');
            expect(status).toBe(201);
            expect(response.data).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        title: expect.any(String),
                    }),
                ])
            );
        });
    });
});
