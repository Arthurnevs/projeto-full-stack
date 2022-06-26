import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #999;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    display: flex;

`
export const LefSide = styled.div`
    width: 70%;
    height: 70px;
    background: #FFFFFF;
    align-items: center;
    padding-top: 0px;
    img{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15%;
        margin-top: 2%;
    }
`
export const RightSide = styled.div`
    width: 30%;
    height: 70px;
    align-items: center;
    background: #FFFFFF;
    justify-content: flex-end;
    span {
        padding-top: 35px;       
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5%;
        font-weight: bold;
    }

`