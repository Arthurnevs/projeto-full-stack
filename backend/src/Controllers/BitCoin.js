const { response } = require('express')
const api = require('../Service/bit')

function cotacoes(){
    return (api.get().then((response)=>{
        console.log(response.data.result.XXBTZEUR)
        return response.data.result.XXBTZEUR
    }).catch(function error(error){
        console.log(error)
        return error
    })    
    )
}

module.exports = {
    async retorno(req,res){
        try{
            const final = await cotacoes()
            return res.status(200).json(final)
        }catch(err){
            return res.status(400).send(err)
        }
    }
}