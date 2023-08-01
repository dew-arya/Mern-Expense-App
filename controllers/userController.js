const userModel = require("../models/userModel.js");

//Login CallBack
const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(200).send("User not found");
    }
    res.status(200).json({
      success: true,
      message: "User Login Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error while logging in",
      error,
    });
  }
};

//Register CallBack
const RegisterController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "New User Registered Successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error while registering user",
      error,
    });
  }
};

module.exports = { LoginController, RegisterController };
