
import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//Route for user Login
// Route for user Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email is provided
    if (!email || !password) {
      return res.json({ success: false, message: "Please provide both email and password." });
    }

    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generate a JWT token if credentials are correct
    const token = createToken(user._id);

    // Send the response with the token
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "An error occurred during login" });
  }
}


//Route for user Register
const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        //Chcking if user already exists
        const exists = await userModel.findOne({email});
        if(exists) {
            return res,json({success:false, message:"User already exists"})
        }

        //validating email and password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }
        if(password.length < 8){
            return res.json({sucess:false, message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating user
        const newUser = new userModel( {
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success:true, token});
    } catch(error){
        console.log(error);
        res.json({success:false, message:"User is already present"})

    }

}

//Route for admin login

const adminLogin = async (req, res) =>{
    try{


        const {email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        }
        else{
            res.json({success:false, message:"Invalid Token"})
        }
    }catch(error){
        console.log(error)
        res.json({success:false, message: error.message});

    }
}

export {loginUser, registerUser, adminLogin};