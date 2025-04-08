import express from 'express';
import { createJob } from '../controllers/jobController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/', protect, authorizeRoles('recruiter'), createJob);

export default router;
