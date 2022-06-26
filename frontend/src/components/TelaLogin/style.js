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
        line-height: 42px;
    }

    label{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;

        color: #828282;

        flex: none;
        order: 1;
        flex-grow: 0;
    }
`

export const Email = styled.div`

`

export const Senha = styled.div`

`