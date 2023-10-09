        //                                              //
       ///      middleware global for all routes      ///
      //                                              //

// ---- express package import
const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
// ---- app extract from express
const app = express();

// ---- json method execute as global middleware
app.use(express.json());

   /* /
  / ----- Cors middleware
 / */

// ---- cors package import
const cors = require("cors");


// ---- core applicator as middleware
app.use(cors({
  origin: "*", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
  optionsSuccessStatus: 204,
}));


        //                    //
       ///      ROUTES      ///
      //                    //

   /* /
  / -----ROUTES API
 / */

// ------- router for test
app.get("/test", async(req,res) => {return res.send("ISBS serveur test router")})


module.exports = app