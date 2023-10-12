const router = require("express").Router();


  /*
 /  ----  code qr route
/*/
router.get( "/check", generateCodeQr);

module.exports = router;