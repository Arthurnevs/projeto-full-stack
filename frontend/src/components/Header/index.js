import React from "react";
import logobeeteller from '../../assets/logobeeteller.png';
import * as S from './style';


function Header(){
    return (
        <S.Container>
            <S.LefSide>
                <img src={logobeeteller} alt="Logo"/>
            </S.LefSide>
            <S.RightSide>
                <span> EN </span>
            </S.RightSide>
        </S.Container>
    )
}

export default Header;
