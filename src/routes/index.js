import express from 'express';
import { info } from '../utils/Log';
import { success } from '../middlewares/Responses';

const router = express.Router();

/**
 * root request operation
 * @name /
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {string}
 */
router.get('/', (_, res) => {
    info('GET /');
    success(res, 'Hello World!!');
});

export default router;
