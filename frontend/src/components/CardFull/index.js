import React from "react";
import * as S from './style';
import bold from '../../assets/bold.png'
import CotacoesFormat from '../../services/CotacoesFormat'

function CardFull({Identificador}){



    return(
        <S.Container>
            <S.Card>
                <S.Identificador>
                    <S.Imagem>
                        <img src={bold} alt="Bold"/>
                    </S.Imagem>
                    <S.Texto>
                        <div className="nameMoeda"> Dolar Americano </div>
                        <div className="data"> {Identificador.dateFormart} </div>
                    </S.Texto>
                </S.Identificador>
                <S.Minimo>
                    <h3> {Identificador.min} </h3>
                </S.Minimo>
                
                <S.Maximo>
                    <h3> {Identificador.max} </h3>
                </S.Maximo>
                <S.Variacao>
                    <div className="modulo"> <h4> {Identificador.var} </h4> </div> 
                </S.Variacao>
            </S.Card>
        </S.Container>
    )
}

export default CardFull;
