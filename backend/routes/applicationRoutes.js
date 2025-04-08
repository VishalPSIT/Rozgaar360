import express from 'express';
import { applyToJob } from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/apply/:jobId', protect, authorizeRoles('student'), applyToJob);

export default router;
