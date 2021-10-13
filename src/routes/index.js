import express from 'express';

const router = express.Router();

/**
 * root request operation
 * @name /
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {string}
 */
router.get('/', (_, res) => {
    res.status(200).json({ message: 'Hello World!!' });
});

export default router;
