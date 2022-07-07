import React from "react";
import * as S from './style';
import Cards from "../Cards";
import CardFull from "../CardFull";
import Vector from '../../assets/Vector.png';
import CotacoesFormat from '../../services/CotacoesFormat'
import { Identificador } from "../Cards/style";



function Cotacoes(){
    
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        CotacoesFormat.get('').then((response) => {
            setPost(response.data);
            console.log(response.data)
        })
        ;
        
    }, []);

    if (!post) return null;

    
    function refreshPage() {
        window.location.reload(false);
    }

    function listarCotacoes(array){
        return(
            array.map((element,index) =>{
                return <CardFull Identificador={element} key = {'cardfull-' + index}/>     
            })
        )
    }

    return(
        <S.Container>
            <S.Dashnoard>
                <S.Head> 
                    <h3> Moedas </h3>
                    <button onClick={refreshPage}> <img src={Vector} alt="Refresh"/> </button>
                    
                </S.Head>
                <Cards/>
            </S.Dashnoard>

            <S.List>
                <S.HeadSection>
                    <h3> Cotações </h3>
                    <select name="moedas" id="moedas">
                        <option value="db">Dolar Americano</option>
                        <option value="bt">Bitcoin</option>
                        <option value="bt-usd">Bitcoin USD</option>
                    </select>      
                </S.HeadSection>
                <S.TableSection>
                    <S.Table1> Moeda </S.Table1>
                    <S.Table2> Minima 
                        <button>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1L7.5 7L13.5 1" stroke="#828282" />
                            </svg>
                        </button>
                    </S.Table2>
                    <S.Table3> Maxima 
                        <button>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1L7.5 7L13.5 1" stroke="#828282" />
                            </svg>
                        </button>
                    </S.Table3>
                    <S.Table4> Variação 
                        <button>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1L7.5 7L13.5 1" stroke="#828282" />
                            </svg>
                        </button>
                    </S.Table4>
                </S.TableSection>
                <S.Values>
                
                {
                    listarCotacoes(post)
                } 
                
                </S.Values>

            </S.List>
        </S.Container>
    )

}

export default Cotacoes;