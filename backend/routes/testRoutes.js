// backend/routes/testRoute.js
import express from 'express';
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Server is alive!');
});

export default router;
