  /*
 /  ----  create new ability middleware
/*/

const dotenv = require("dotenv")
dotenv.config()

exports.isAbleTo = async (req, res, next) => {
    //--- get auth 
    const token = req.header("token")
    try {
    // ----- check token
   if(token === process.env.ADMINTOKENKEYACCESS) {
    next()
   } else {
    return res.status(401).send({message: "you need to log in "});
   }
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
};