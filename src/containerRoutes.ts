import { Router } from 'express';
import { getContainers } from './containerController';

const router = Router();

// Endpoint: GET /api/containers
router.get('/', getContainers);

export default router;