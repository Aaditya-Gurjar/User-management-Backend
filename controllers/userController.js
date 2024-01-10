const User = require('../models/userModel.js')
const bcrypt = require('bcrypt');


exports.home = (req, res)=>{
    res.send("<h1>Welcome to My Server</h1>");

}




exports.createUser = async (req, res) => {
    //extract info
    try {
      const { name, email, password } = req.body;
        const saltRounds = 10
      bcrypt.hash(password, saltRounds, async (err, hash)=>{
        
        if(err) throw new error("Error occured during hasing the password", err);
        const user = await User.create({
            name,
            password : hash,
            email
          });
     
          res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user,
          });
      } )
      
    } catch (error) {
      console.log("Error occured :- ", error);
  
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  exports.loginUser = async (req,res) => {
        try {
            const {email, password} = req.body;
            
            const user = await User.findOne({email : email, });
            if(user){
                bcrypt.compare(password, user.password, function(err, result) {
                    if(err) throw new error("Wrong Password ",err);
                    
                    if(result){
                        // password matched
                        res.status(201).json({
                            success : true,
                            message:"Login succesful",
                            user
                        })
                    }
                    else{
                        res.send(200).json({
                            success:false,
                            message : "Login failed"
                        })
                    }
                });
            }
            else{
                throw new error("User not found");
            }
        } catch (error) {
            console.log("Error occured :", error);
            res.status(400).json({
                success: false,
                message: error.message,
              });
        }
  }

