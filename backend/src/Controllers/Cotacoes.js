const api = require('../Service/api')
const bit = require('../Service/bit')

function cotacoes(){
    return (api.get().then((response)=>{
        console.log(parseFloat(response.data[0].bid).toFixed(2))
        obj = {
            valor : response.data[0].bid,
            max : response.data[0].high,
            min : response.data[0].low,
            var : response.data[0].varBid
        };

        const meuJson = JSON.stringify(obj);
        console.log(response.meuJson)
        return response.meuJson
        })  
    )  
}

module.exports = {
    async retorno(req,res){
        try{
            const final = await cotacoes()
            console.log(final)
            return res.status(200).json(final)

        }catch(err){
            return res.status(400).send(err)
        }
    }
}
