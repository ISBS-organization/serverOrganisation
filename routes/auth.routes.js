const checkPassword = require("../controller/auth/authCkech.controller");

const router = require("express").Router();


  /*
 /  ----  code qr route
/*/
router.get( "/check", checkPassword);

module.exports = router;