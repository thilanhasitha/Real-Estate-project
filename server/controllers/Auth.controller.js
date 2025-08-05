import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const signup = async(req,res)=>{
   
    const {username,email,password} = req.body;
    //password bcrypted 
    const hashedpassword = bcryptjs.hashSync(password,10)
    const newUser = new User({username,email,password:hashedpassword});
   try{
    await newUser.save();
    res.status(201).json("user created succcessfully");
   }
   catch{error}{
    res.status(500).json(error.message);
   }
    

}

export const signin = async(req,res,next)=>{
    const{username,password} = req.body;
    try{
       const validuser = User.findOne({email});
       if(!validuser)return next("User not found");
       const validpadssword = bcryptjs.compareSync(password,validuser.password);
       if(!validpadssword)return next("Invalid password");
       
       //create token 
       const token = jwt.sign({id:validuser._id},process.env.JWT_SECRET);
       const{password,pass, ...rest } = validuser._doc;
       //save the token as a cookie
       res.cookie('access_token',token,{httpOnly:true,}).status(200).json(validuser);

    }
    catch(error){
       next(error);
    }
}
