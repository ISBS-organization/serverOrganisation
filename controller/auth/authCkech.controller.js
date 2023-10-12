const dotenv = require('dotenv')
dotenv.config()

const checkPassword = async (req, res) => {
    const ADMINTOKENKEY = process.env.ADMINTOKENKEY
    const ADMINTOKENKEYACCESS = process.env.ADMINTOKENKEYACCESS

  const {token} = req.params
  try {
    if (token === ADMINTOKENKEY) {
      return res.status(200).send({message: "your token is the following", data:ADMINTOKENKEYACCESS})
    }
    return res.status(400).send({message: "password incorrect"})
  } catch (error) {
    return res.status(500).send({message: "server error please try later"})
 }
}

module.exports = checkPassword