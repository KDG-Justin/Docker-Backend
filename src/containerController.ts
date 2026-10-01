import { Request, Response } from 'express';
import docker from './config/docker';

// GET /api/containers
export async function getContainers(req: Request, res: Response): Promise<Response> {
  try {
    const containers = await docker.listContainers({ all: true });

    return res.json({
      success: true,
      count: containers.length,
      data: containers,
    });
  } catch (error) {
    console.error('Fout bij ophalen van containers:', error);

    return res.status(500).json({
      success: false,
      message: 'Docker desktop is offline',
    });
  }
}