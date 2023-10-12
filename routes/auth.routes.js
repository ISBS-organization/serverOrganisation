const checkPassword = require("../controller/auth/authCkech.controller");

const router = require("express").Router();


  /*
 /  ----  code qr route
/*/
router.post( "/check/:token", checkPassword);

module.exports = router;