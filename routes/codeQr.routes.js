const generateCodeQr = require("../controller/codeQR/generateCodeQR.controller");

const router = require("express").Router();


  /*
 /  ----  code qr route
/*/
router.get( "/codeQr", generateCodeQr);


module.exports = router;