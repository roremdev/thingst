import express from 'express';
import Resource from '../../services/Resource';

const router = express.Router();
const taskService = new Resource('tasks');

/**
 * @description get task operation
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 * @returns {ResponseObject}
 */
router.get('/', async (req, res, next) => {
    try {
        const data = await taskService.findAll();
        res.status(200).json({
            status: 'success',
            data,
            message: 'Retrieved all tasks',
        });
    } catch (error) {
        next(error);
    }
});

export default router;
