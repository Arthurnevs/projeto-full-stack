import React from "react";
import * as S from './style';
import Cards from "../Cards";

function Cotacoes(){

    return(
        <S.Container>
            <S.Dashnoard>
                <S.Head> <h3> Moedas </h3></S.Head>
                <Cards/>
            </S.Dashnoard>

            <S.List>
                <S.HeadSection>
                    <h3> Cotações </h3>
                    <select name="moedas" id="moedas">
                        <option value="db">Dolar Americano</option>
                        <option value="bt">Bitcoin</option>
                        <option value="bt-usd">Bitcoin USD</option>
                    </select>      
                </S.HeadSection>
                <S.TableSection>
                    

                
                </S.TableSection>

            </S.List>
        </S.Container>
    )

}

export default Cotacoes;