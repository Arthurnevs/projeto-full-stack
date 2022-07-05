import React from "react";
import Header from "../../components/Header";
import * as S from './style';
import Cotacoes from '../../components/Cotacoes'

function Main(){
    return (
        <S.Container> 
            < Header/>
            <Cotacoes/>
        </S.Container>
        

    )
}

export default Main;