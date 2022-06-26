import React from "react";

import Header from "../../components/Header";
import TelaLogin from "../../components/TelaLogin"
import * as S from './style';

function Login(){
    return (
        <S.Container> 
            < Header/>
            < TelaLogin/>
        </S.Container>
        

    )
}

export default Login;
