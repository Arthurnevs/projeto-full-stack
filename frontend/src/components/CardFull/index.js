import React from "react";
import * as S from './style';
import bold from '../../assets/bold.png'
import { Senha } from "../TelaLogin/style";
function CardFull(){
    return(
        <S.Container>
            <S.Card>
                <S.Identificador>
                    <S.Imagem>
                        <img src={bold} alt="Bold"/>
                    </S.Imagem>
                    <S.Texto>
                        <div className="nameMoeda"> Dolar Americano </div>
                        <div className="data"> 10/01/2021 </div>
                    </S.Texto>
                </S.Identificador>
                <S.Maximo>
                    <h3> 5.5461 </h3>
                </S.Maximo>
                <S.Minimo>
                    <h3> 5.5507 </h3>
                </S.Minimo>
                <S.Variacao>
                    <div className="modulo"> + 1% </div> 
                </S.Variacao>

            </S.Card>
            
        </S.Container>
    )
}

export default CardFull;
