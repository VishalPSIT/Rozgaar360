import asyncHandler from 'express-async-handler';
import Application from '../models/applicationModel.js';


export const applyToJob = asyncHandler(async (req, res) => {
    const jobId = req.params.jobId;
    const application = await Application.create({
      job: jobId,
      applicant: req.user.id,
    });
    res.status(201).json(application);
  });
  