const express = require('express');
import User from '../Models/UserModel/UserModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = "LOGINAPI"

const register = async (req: any, res: any) => {
  try {
    const { username, email, password,role } = req.body;
    console.log(username,email,password)
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
   
    const user = new User({ name:username, email, password:hashedPassword,role });
    console.log(username,email,password)
    await user.save();

    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Server error' });
  }
};


 const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    console.log(email,password)

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Incorrect Email' });
    }

    // Check password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    // console.log( user.password)
    // console.log(isPasswordMatch)
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Password Incorrect' });
    }

    // Generate and send JSON Web Token (JWT)
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },SECRET_KEY
     
    );

    res.status(200).json({ message: 'User Login Successfully', token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};




export default {register,login}