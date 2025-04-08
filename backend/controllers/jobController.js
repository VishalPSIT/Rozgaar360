import asyncHandler from 'express-async-handler';
import Job from '../models/jobModel.js';


export const createJob = asyncHandler(async (req, res) => {
    const { title, description, location, type } = req.body;
  
    const job = await Job.create({
      recruiter: req.user.id,
      title,
      description,
      location,
      type,
    });
  
    res.status(201).json(job);
  });
  