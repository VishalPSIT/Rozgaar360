import express from 'express';
import { updateProfile, saveJob , forgotPassword } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();
router.post('/reset-password/:token', resetPassword);
router.patch('/profile', protect, updateProfile);
router.post('/save-job/:jobId', protect, authorizeRoles('student'), saveJob);
router.post('/forgot-password', forgotPassword);
export default router;