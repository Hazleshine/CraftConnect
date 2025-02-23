const User = require("../models/User");

const saveUserDetails = async (req, res) => {
  const { profile } = req.body;
  const { name, careerGoals, pastEducation, goals } = profile;
  console.log(req.body);

  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update existing user details
    if (name) user.profile.name = name;
    if (careerGoals) user.profile.careerGoals = careerGoals;
    if (pastEducation) user.profile.pastEducation = pastEducation;
    if (goals) user.profile.goals = goals;

    await user.save();

    res.status(200).json({ message: "User details saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveUserDetails };