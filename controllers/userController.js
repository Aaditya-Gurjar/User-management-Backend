const User = require('../models/userModel.js')


exports.home = (req, res)=>{
    res.send("<h1>Welcome to My Server</h1>");

}

// exports.createUser = async(req, res) =>{
//     try {

//         const {name, email} = req.body;

//         // if(name || email == " ") throw new error("Name and Email are Required");
//         const user = await User.create({
//             name,
//             email
//         });

//         res.status(201).json({
//             success : true,
//             message : "User Created Successfully!",
//             user
//         })
        
        
//     } catch (error) {
//         console.log("Error occured during Creating User", error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//           });
//     }
// }


exports.createUser = async (req, res) => {
    //extract info
    try {
      const { name, email } = req.body;
  
      const user = await User.create({
        name,
        email,
      });
  
      res.status(201).json({
        success: true,
        message: "User Created Successfully",
        user,
      });
    } catch (error) {
      console.log("Error occured :- ", error);
  
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  

