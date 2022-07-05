import React from "react";
import * as S from './style';
import Cards from "../Cards";
import CardFull from "../CardFull";
import { Senha } from "../TelaLogin/style";


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
                    <S.Table1> Moeda </S.Table1>
                    <S.Table2> Minima </S.Table2>
                    <S.Table3> Maxima </S.Table3>
                    <S.Table4> Variação </S.Table4>
                </S.TableSection>
                <S.Values>
                    <CardFull/>
                    <CardFull/>
                    <CardFull/>
                    <CardFull/>
                    
                </S.Values>

            </S.List>
        </S.Container>
    )

}

export default Cotacoes;