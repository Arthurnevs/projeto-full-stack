import styled from 'styled-components';
import tela from '../../assets/tela.png'

export const Container = styled.div`
    width: 100%;
    height: 100%;   ;
    display: flex;
 
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${tela});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const RighSide = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(236, 246, 255, 0.3);
    text-align: center;
    
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 3px;

    }

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        color: #828282;
        line-height: 3px;
    }

    label{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;

        color: #828282;
    }
`

export const Email = styled.div`
    margin: 25px;
    label{
        display: flex;
        position: relative;
        flex-direction: row;
    }
    input{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 280px 20px 16px;
        gap: 10px;

        background: #FFFFFF;

        border: 1px solid #E0E0E0;

        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;

        flex: none;
        order: 1;
        flex-grow: 0;
    }
`

export const Senha = styled.div`
    margin: 25px;
    display: flex;
    margin-bottom: 0;

`

export const SenhaEsquerda = styled.div`
    width: 68%;
    label{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

`
export const SenhaDireita = styled.div`
    width: 32%;
    a {     
        text-decoration: none;
        
        color: #f4c23b;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
    }
`

export const SenhaInput = styled.div`
    input{
        box-sizing: border-box;
        align-items: center;
        padding: 20px 280px 20px 16px;
        gap: 10px;


        background: #FFFFFF;

        border: 1px solid #E0E0E0;

        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;

        flex: none;
        order: 1;
        flex-grow: 0;
    } 
`

export const BotaoLogin = styled.div`
    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px 8px;
        position: static;
        background-color: #f4c23b;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        width: 100%;
        border: none;
        
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 59px 0px;
        color: black;
        font-size: 15px;
        font-weight: bold;
    }
`


