import React, { useState } from "react";
import * as S from './style';
import api from '../../services/api'
import { useUserContext } from '../../hooks/useUserContext';



function TelaLogin(){

    const {userData, setUserData} = useUserContext()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    //const navigate = useNavigate();

    async function loginHandler(e){
        e.preventDefault()
        
        try{
            const response = await api.post('session',{
                email,
                password
            }) 
        console.log(response.data)
        setUserData({email: response.data.email , isLogged: true})

        //navigate('/dashboard');
        
        }catch(err){
            alert('Falha no login')
        }
    }
    
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
                        <input 
                            type="email" 
                            placeholder="Exemplo@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </S.Email>
                    <S.Senha>
                        <S.SenhaEsquerda>
                        <label>
                            Senha
                        </label>    
                        </S.SenhaEsquerda>
                        <S.SenhaDireita>
                            <a href="http://www.google.com.br"> Esqueceu a senha </a>
                        </S.SenhaDireita>    
                    </S.Senha>
                    <S.SenhaInput>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </S.SenhaInput>
                    <S.BotaoLogin>
                        <button onClick={loginHandler}> Login </button>
                    </S.BotaoLogin>

                 </form>
                 
            </S.RighSide>
        </S.Container>
    )
}

export default TelaLogin;