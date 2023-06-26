/* eslint-disable no-unused-vars */
import * as React from 'react'

import Imagem from "/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_masculina_frio/moletom1.png"

const Pagina = () =>{
return(
    <><h1
        style={{
            fontFamily: "monospace",
            fontSize: "50px",
            width: "auto",
            height: "auto",
            textAlign: "center",
        }}>MODA CASUAL</h1>
        <div style={{margin:"auto",
    width:"300px",backgroundColor:"Gainsboro"}}>
        <img src={Imagem}/>
        </div></>
);
}
export default Pagina