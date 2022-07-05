import styled from 'styled-components';

export const Container = styled.div`
    width: 1170px;
    height: 189px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //background-color: blue;
`

export const Card = styled.div`
    width: 369px;
    height: 189px;
    display: flex;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    box-sizing: border-box;
    border: 24px solid #ffffff;
`

export const LefSide = styled.div`
    width: 305px;
    height: 141px;
    //background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`


export const RighSide = styled.div`
    height: 141px;
    width: 64px;
    //background-color: red;
    img{
        float:right
    }
`

export const Nome = styled.div`
    width:257px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    letter-spacing: -0.04em;

`
export const Valor= styled.div`
    height: 141px;
    width:116px;
    //background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Texto= styled.div`
    width:29px;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.04em;
    color: #828282;
    //background-color: red;

`
export const Moeda = styled.div`
    width:87px;
    height: 80px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.04em;
    color: #333333;
    //background-color: blue;
`

export const Identificador= styled.div`
    width:116px;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.04em;
    color: #828282;
    
`