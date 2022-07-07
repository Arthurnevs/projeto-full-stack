import styled from 'styled-components';

export const Container = styled.div`
    width: 1170px;
    height: 104px;
    padding-bottom: 5px;

    
`

export const Card = styled.div`
    width: 1170px;
    height: 104px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #FFFFFF;
/* Shadown Cards */

box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
border-radius: 8px;

`


export const Identificador = styled.div`
    width: 347px;
    height: 72px;
    display: flex;
`
export const Imagem = styled.div`
    img{
        width: 72px;
        height: 72px;
    }
    
`
export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    width: 141px;
    justify-content: center;
    align-content: space-between;
    padding-left: 16px;
    .nameMoeda{
        width: 141px;
        height: 21px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        letter-spacing: -0.04em;

        /* Gray 1 */

        color: #333333;
        padding-bottom: 4px;

    }
    .data{
        width: 125px;
        height: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: -0.04em;

        /* Gray 3 */

        color: #828282;
    }

`
export const Maximo = styled.div`

    width: 90px;


`

export const Minimo = styled.div`
    width: 90px;


`

export const Variacao = styled.div`
    width: 90px;
    
    display: flex;
    align-items: center;
    //justify-content: center;

    .modulo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 37px;
        background: #E0E0E0;
        border-radius: 8px;

        h4{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 21px;
            /* identical to box height */

            letter-spacing: -0.04em;

            /* Gray 1 */

            color: #333333;
        }
    }

`


