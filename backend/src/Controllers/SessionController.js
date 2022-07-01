const User = require('../Models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async login(req,res){
        const {email,password} = req.body

        try{
            const userJaExiste = await User.findOne({ email })

            if(!userJaExiste){
                return res.status(404).send({message: "Usuario nao existe"})
            }
            
            const senhaDoUser = await bcrypt.compare(password,userJaExiste.password)
            if(!senhaDoUser){
                return res.status(400).send({message: "Senha incorreta"})
            }
            const user = userJaExiste
            return res.status(200).send(user)


        }catch(err){
            return res.status(400).send(err)
        }
    }
}