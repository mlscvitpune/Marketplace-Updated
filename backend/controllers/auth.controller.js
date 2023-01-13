import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token=jwt.sign({id:user._id,name:user.name,email:user.email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10d'});
      res.status(200).json({token});
    } else {
      res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ user });
  } catch (error) {
    if (error.code === 11000) {
      console.log("email already exists");
      res.status(402).json({ error: "Email already exists!" });
    }
    console.log("error");
    res.status(400).json({ error: error.message });
  }
};


export { login, signup };
