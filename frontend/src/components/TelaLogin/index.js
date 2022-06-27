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
                <h3>Faça Login com seus dados inseridos  <p>durante o seu registro</p></h3>
                 
                <form>
                    <S.Email>
                        <label>
                            Email
                        </label>
                        <input type="email" placeholder="Exemplo@email.com"/>
                    </S.Email>
                    <S.Senha>
                        <S.SenhaEsquerda>
                        <label>
                            Senha
                        </label>    
                        </S.SenhaEsquerda>
                        <S.SenhaDireita>
                            <a href="#"> Esqueceu a senha </a>
                        </S.SenhaDireita>    
                    </S.Senha>
                    <S.SenhaInput>
                        <input type="password" placeholder="Enter Password"/>
                    </S.SenhaInput>
                    <S.BotaoLogin>
                        <button> Login </button>
                    </S.BotaoLogin>

                 </form>
                 
            </S.RighSide>
        </S.Container>
    )
}

export default TelaLogin;