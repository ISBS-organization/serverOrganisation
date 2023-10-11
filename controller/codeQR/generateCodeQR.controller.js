  /*
 /  ---- generate codeQr code
/*/

const QRCode = require('qrcode')

const generateCodeQr = async (req, res, next) => {
    // ----- get using information from request
    const test = Date.now()
       try {
        const codeQr = await QRCode.toCanvas( `asset/${test}.png`,`hello how are all nice to scan my Qr code `,{type:'png', errorCorrectionLevel: 'medium' })
    // ----- response of the generated code qr
       req.codeQr = codeQr
       next()
      } catch (error) {
        console.log(error)
        return res.status(500).send({message:'Internal server error'});
      }
    }
module.exports = generateCodeQr