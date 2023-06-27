/* eslint-disable no-unused-vars */
import * as React from 'react'

import Imagem from "../imagens/blusa_feminina_frio/sueter04.png"

const Sueter4 = () =>{
    const fundo_valores = {
        width:"400px",
        height:"auto",
        backgroundColor:"LightGrey", 
        
    }
    const fundo_global = {
        width:"auto",
        height:"auto",
        margin:"auto",
        display:"flex",
        flexWrap:"wrap"
    }
    const titulo_produto={
        fontFamily:"Helvetica",
        fontWeight:"bold",
        fontSize:"30px",
        textAlign:"center"
    }
    
return(
    <> 
    <div style={{margin:"auto",width:"400px",backgroundColor:"silver",}}>
   <h1
       style={{
           fontFamily: "Arial",
           fontSize: "50px",
           textAlign: "center",marginBottom:"20px"
       }}>MODA CASUAL</h1></div>
       <section style={{padding:"0px",margin:"0px",
   justifyContent:"center",alignItems:"center",height:"50vh",
   boxSizing:"border-box",display:"flex"}}>
   <section style={fundo_global}>
 
       <div style={{width:"400px",
       backgroundColor:"Gainsboro"
       }}>
       <img src={Imagem} style={{width:"400px",marginTop:"50px"}} id=''/>
       </div>
       <div style={fundo_valores}>
       <h1 style={titulo_produto}>Suéter de Lã</h1>
    
       <h2 style={{marginTop:"30px",textAlign:"center",
       fontFamily:"monospace",fontSize:"30px"}}>R$ 85,00</h2>
       <p style={{fontFamily:"Helvetica",marginLeft:"15px",
   marginBottom:"50px"}}>2X de 44,50 sem juros</p>
         
         <h2 style={{margin:"0px",textIndent:"20px",
      fontFamily:"Arial",fontSize:"18px"}}>Tamanhos</h2>
       <div style={{width:"230px",height:"auto",padding:"4px",margin:"0px",
      backgroundColor:"none",display:"flex",flexWrap:"wrap"}}>
       <button style={{width:"60px",height:"30px",marginLeft:"10px"}}>P</button>
       <button style={{width:"60px",height:"30px",marginLeft:"10px"}}>M</button>
       <button style={{width:"60px",height:"30px",marginLeft:"10px"}}>G</button>
      </div>

      <h2 style={{marginTop:"20px",textIndent:"20px",
      fontFamily:"Arial",fontSize:"18px",marginBottom:"0px"}}>Quantidade</h2>
      <div style={{width:"230px",height:"auto",padding:"4px",margin:"0px",
      backgroundColor:"none",display:"flex",flexWrap:"wrap"}}>
       <input type='number' max={20} min={1} 
       style={{marginLeft:"15px"}}></input>
      </div>
<hr  style={{border:"4px solid white"}}/>
<button style={{width:"100px",height:"40px",
marginLeft:"150px",marginTop:"20px",
backgroundColor:"darkgray",borderRadius:"5px",border:"1px solid black",
fontFamily:"Arial",fontWeight:"bold",
cursor:"pointer"}} id='btn_compra'>Comprar</button>
</div>
    </section></section>
       </>
);
}
export default Sueter4