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
`