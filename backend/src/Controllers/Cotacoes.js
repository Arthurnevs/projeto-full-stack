const api = require('../Service/api')
const bit = require('../Service/bit')

function cotacoes(){
    return (api.get().then((response)=>{
        console.log(parseFloat(response.data[0].bid).toFixed(2))
        meuJson = {
            'valor' : response.data[0].bid,
            'max' : response.data[0].high,
            'min' : response.data[0].low,
            'var' : response.data[0].varBid
        }
        return response.meuJson[0]
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
