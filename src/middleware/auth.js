const jwt = require('jsonwebtoken')
const Aluno = require('../models/Aluno')

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const user = await Aluno.findOne({ _id: data._id});
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to acess this resource'})
    }

}
module.exports = auth