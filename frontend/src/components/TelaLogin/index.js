import React, { Suspense } from "react";
import * as S from './style';
import tela from '../../assets/tela.png'

function TelaLogin(){
    return (
        <S.Container>
            <S.LeftSide>

            </S.LeftSide>
            <S.RighSide>
                <h1>Olá! Bem vindo de volta.</h1>
                <label>Faça Login com seus dados inseridos  <p>durante o seu registro</p></label>
                 <form>
                    <S.Email>
                        <label>
                            Email
                        </label>
                        <input type="email" placeholder="Exemplo@email.com"/>
                    </S.Email>
                    <S.Senha>
                        <label>
                            Senha
                        </label>
                        <a href="#"> Esqueceu a senha </a>
                        <input type="password" placeholder="Enter Password"/>
                    </S.Senha>

                 </form>
            </S.RighSide>
        </S.Container>
    )
}

export default TelaLogin;