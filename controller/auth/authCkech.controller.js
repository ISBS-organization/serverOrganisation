const dotenv = require('dotenv')
dotenv.config()

const queryListController = async (req, res) => {
    const ADMINTOKENKEY = process.env.ADMINTOKENKEY
  const token = req.body.token
  try {
    if (token === ADMINTOKENKEY) {
      return res.status(200).send({message: "your token is the following", token:ADMINTOKENKEY})
    }
    return res.status(500).send({message: "server error please try later"})
  } catch (error) {
    return res.status(500).send({message: "server error please try later"})
 }
}

module.exports = queryListController