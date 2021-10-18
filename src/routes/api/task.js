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
/**
 * @description create task operation
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 */
router.post('/', async (req, res, next) => {
    try {
        info('POST /task');
        const data = await taskService.create(req.body);
        success(res, data, 201);
    } catch (error) {
        next(error);
    }
});
/**
 * @description create task operation
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 */
router.patch('/:id', async (req, res, next) => {
    try {
        info('POST /task');
        const data = await taskService.update(req.params, req.body);
        success(res, data, 200);
    } catch (error) {
        next(error);
    }
});
/**
 * @description delete task operation
 * @param {string} path - express path
 * @param {callback} middleware - express generic middleware
 */
router.delete('/:id', async (req, res, next) => {
    try {
        info('DELETE /task');
        const data = await taskService.delete(req.params);
        success(res, data);
    } catch (error) {
        next(error);
    }
});

export default router;
