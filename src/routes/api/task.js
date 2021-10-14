import express from 'express';
import { info } from '../../utils/Log';
import { success } from '../../middlewares/Responses';
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
        info('GET /task');
        const data = await taskService.findAll();
        success(res, data);
    } catch (error) {
        next(error);
    }
});

export default router;
