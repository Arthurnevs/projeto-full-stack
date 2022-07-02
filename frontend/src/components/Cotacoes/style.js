import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100%;   ;
    display: flex;
    flex-direction: column;


    
    align-content: flex-start;

    //justify-content: center;
    align-items: center;
    //background-color: blue;
`

export const Dashnoard = styled.div`
    display: flex;
    width: 1170px;
    height: 271px;
    //background-color: red;
    
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    
`

export const Head = styled.div`
    width: 1170px;
    height: 42px;
    //background-color: green;
    padding-top: 38px;
    padding-bottom: 40px;
    gap: 978px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        letter-spacing: -0.04em;
        color: #333333;
        
    }
`
export const List= styled.div`
    width: 1170px;
    height: 271px;
    padding: 43px;
    //background-color: blue;
`

export const HeadSection= styled.div`
    width: 1170px;
    height: 50px;
    //background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        letter-spacing: -0.04em;
        color: #333333;
    }
    select{
        box-sizing: border-box;

        padding: 8px 16px;
        gap: 8px;

        width: 189px;
        height: 40px;

        background: #FFFFFF;
       
        border: 1px solid #E0E0E0;
        border-radius: 4px;
    }
`

export const TableSection= styled.div`
`

