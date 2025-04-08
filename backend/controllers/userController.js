import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';




export const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }
  
    const { name, profilePic, skills } = req.body;
  
    user.name = name || user.name;
    user.profilePic = profilePic || user.profilePic;
    user.skills = skills || user.skills;
  
    const updatedUser = await user.save();
  
    res.status(200).json(updatedUser);
  });
  //saving job
  export const saveJob = asyncHandler(async (req, res) => {
    const jobId = req.params.jobId;
    const user = await User.findById(req.user.id);
  
    if (!user.savedJobs.includes(jobId)) {
      user.savedJobs.push(jobId);
      await user.save();
    }
  
    res.status(200).json({ message: 'Job saved' });
  });

  //forgot password
  export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // 🟡 Optionally: generate token, save to DB or send OTP/email here
    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  
    // Save to user
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // token valid for 15 minutes
  
    await user.save();
  
    // Reset URL to be sent in email (for now console)
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
  
    // Later, you will send an email with this link
    console.log(`🔗 Reset Password URL: ${resetUrl}`);
  
    res.status(200).json({
      message: 'Reset link sent successfully to your email (Check console for now)',
    });
});


export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
  
    try {
      const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  
      const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }, // check expiry
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // update password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      // remove token fields
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
  
      await user.save();
  
      res.status(200).json({ message: 'Password has been reset successfully' });
    } catch (err) {
      console.error('Reset Error:', err.message);
      res.status(500).json({ message: 'Server error' });
    }
  };
  