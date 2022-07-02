import React from "react";
import bold from '../../assets/bold.png'
import * as S from './style';
import coinbtc from '../../assets/coinbtc.png'

function Cards(){
    return (
        <S.Container>
            <S.Card> 
                <S.LefSide>
                    <S.Nome> BRL / USD </S.Nome>
                        <S.Valor>
                            <S.Texto> R$ </S.Texto>  
                            <S.Moeda> 5,30 </S.Moeda>  
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
                    <S.Valor> <S.Texto> R$ </S.Texto>  <S.Moeda> 3732,09 </S.Moeda>  </S.Valor>
                    <S.Identificador> </S.Identificador>
                </S.LefSide>
                <S.RighSide> 
                    <img src={coinbtc} alt="Logo"/> 
                </S.RighSide> 
            
            </S.Card>
            <S.Card>         
                <S.LefSide>
                    <S.Nome> BTC / USD </S.Nome>
                    <S.Valor> <S.Texto> R$ </S.Texto>  <S.Moeda> 4241,60 </S.Moeda>  </S.Valor>
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