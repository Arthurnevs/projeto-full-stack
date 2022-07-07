const api = require('../Service/api')
const bit = require('../Service/bit')

function cotacoes(){
    return (api.get().then((response)=>{
        var meuJson = []
        for(var itens in response.data){
            const varFormat = parseFloat(response.data[itens].pctChange).toFixed(2)
            
            var date =new Date(response.data[itens].timestamp * 1000)
            dateFormart = (date.toLocaleDateString("pt-BR"))
            
            meuJson.push ({
                "valor" : response.data[itens].bid,
                "max" : response.data[itens].high,
                "min" : response.data[itens].low,
                "var" : varFormat,
                "dateFormart" : dateFormart
            })
        }

        response.data = meuJson
        return response.data
        })  
    )  
}

module.exports = {
    async retorno(req,res){
        try{
            const final = await cotacoes()
            /*
            function comparer(a,b){
                if(a.max > b.max){
                    return -1
                }
                if(a.max < b.max){
                    return 1;
                }
                return 0;
            }
            final.sort(comparer)
            */
            return res.status(200).json(final)

        }catch(err){
            return res.status(400).send(err)
        }
    }
}
