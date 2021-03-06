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
    justify-content: space-between;



    button{
        background-color: #FFFF;
        border: none;
    }

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
    width: 1170px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: -0.04em;

    /* Gray 3 */

    color: #828282;
    padding-top: 19px;
`

export const Table1= styled.div`
    width: 347px;
    height: 30px;
`
export const Table2= styled.div`
    width: 90px;
    height: 30px;
    button{
        background-color: #FFFF;
        border: none;
    }
`
export const Table3= styled.div`
    width: 90px;
    height: 30px;
    button{
        background-color: #FFFF;
        border: none;
    }
`
export const Table4= styled.div`
    width: 90px;
    height: 30px;

    button{
        background-color: #FFFF;
        border: none;
    }
`
export const Values= styled.div`
    width: 1167px;
    height: 570px;
`