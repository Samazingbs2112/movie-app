const bcrypt = require('bcrypt');
const Users = require('../models/userModel');
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';


// Register

const create = async (req, res) => {

    try {
    // Check if user already exists through email
    const existingUser = await Users.findOne({ email: req.body.email });
    if (existingUser) {
        return res
        .status(409)
        .send({ error: '409', message: 'User already exists' });
    }
    // Check if password and confirm password match
    if (req.body.password !== req.body.confirmPassword) {
        return res
          .status(400)
          .send({ error: '400', message: 'Passwords do not match' });
    }
  
    // password required
    if (req.body.password === '') throw new Error();
    
     // hashing the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.confirmPassword = undefined;
    console.log(req.body);
      await Users.create(req.body);
      res.status(200).send({message: "User signed up !", success: true});
      } catch (error) {
      res.status(401).send({ error, message: 'Could not create user' });
    }
    
  };


  // Login
  const login = async (req, res) => {
    try {
     const user = await Users.findOne({ email: req.body.email });
     const validatedPass = await bcrypt.compare(req.body.password, user.password);
     if (!validatedPass) throw new Error();

     // create token 
     const accessToken = jwt.sign({userId: user._id}, SECRET_KEY)

     res.status(200).json({
        message: "User signed in!",
        success: true,
        data: accessToken,
     })
   } catch (error) {
     res
       .status(500)
       .send({ error: '401', message: 'Username or password is incorrect' });
   }
   
 };


 // get current user (only logged in user can access data)
 const getCurrentUser = async (req, res) => {
    try {
      const user = await Users.findById(req.userId).select("-password");
      res.status(200).json({
        message: "User fetched",
        success: true,
        data: user,
      })
    } catch (error) {
       console.log(error);
    }
 }


 module.exports = {create, login, getCurrentUser}