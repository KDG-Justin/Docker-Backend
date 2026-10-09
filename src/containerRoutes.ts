import { Router } from 'express';
import { getContainers, removeContainer, startContainer, stopContainer } from './containerController';

const router = Router();

// Endpoints container
// GET /api/containers
router.get('/', getContainers);

// POST /api/containers/:id/start
router.post('/:id/start', startContainer);

// POST /api/containers/:id/stop
router.post('/:id/stop', stopContainer);

// DELETE /api/containers/:id
router.delete('/:id', removeContainer);

export default router;