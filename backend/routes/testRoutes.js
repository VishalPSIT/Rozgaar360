import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Backend is connected with frontend successfully!' });
});

export default router;
