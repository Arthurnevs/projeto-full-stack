import React from "react";
import bold from '../../assets/bold.png'
import * as S from './style';
import coinbtc from '../../assets/coinbtc.png'

import Cotacoes from '../../services/Cotacoes'
import btcEur from '../../services/btcEur'
import btcUsd from '../../services/btcUsd'



function Cards(){

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        Cotacoes.get('').then((response) => {
            setPost(response.data);
            console.log(response.data)
        })
        ;
        
    }, []);
    
    const[postBit, setPostBit] = React.useState(null);

    React.useEffect(()=>{
        btcEur.get('').then((response)=>{
            setPostBit(response.data.result.XXBTZEUR.a[0]);
            console.log(response.data.result.XXBTZEUR.a[0])
        })
        ;
    },[]);

    const[postBitUsd, setPostBitUsd] = React.useState(null);

    React.useEffect(()=>{
        btcUsd.get('').then((response)=>{
            setPostBitUsd(response.data.result.XXBTZUSD.a[0]);
            console.log(response.data.result.XXBTZUSD.a[0])
        })
        ;
    },[]);

    if (!postBit) return null;
    if (!post) return null;

    return (
        <S.Container>
            <S.Card> 
                <S.LefSide>
                    <S.Nome> BRL / USD </S.Nome>
                        <S.Valor>
                            <S.Texto> R$ </S.Texto>  
                            <S.Moeda> {parseFloat(post[0].bid).toFixed(2)} </S.Moeda>  
                        </S.Valor>
                        
                        <S.Identificador>
                            Dolar turismo 
                        </S.Identificador>
                
                </S.LefSide>
                <S.RighSide>
                    <img src={bold} alt="Logo"/>
                </S.RighSide>
            </S.Card>

            <S.Card>    
                <S.LefSide>
                    <S.Nome> BTC / EUR </S.Nome>
                    <S.Valor> <S.Texto> R$ </S.Texto>  <S.Moeda> {parseFloat(postBit).toFixed(2)} </S.Moeda>  </S.Valor>
                    <S.Identificador> </S.Identificador>
                </S.LefSide>
                <S.RighSide> 
                    <img src={coinbtc} alt="Logo"/> 
                </S.RighSide> 
            
            </S.Card>
            <S.Card>         
                <S.LefSide>
                    <S.Nome> BTC / USD </S.Nome>
                    <S.Valor> <S.Texto> R$ </S.Texto>  <S.Moeda> {parseFloat(postBitUsd).toFixed(2)} </S.Moeda>  </S.Valor>
                    <S.Identificador> </S.Identificador>
                </S.LefSide>
 
                <S.RighSide>
                    <img src={coinbtc} alt="Logo"/>
                </S.RighSide> 
            </S.Card>
        </S.Container>    
    )
}

export default Cards;