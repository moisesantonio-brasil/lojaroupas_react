/* eslint-disable no-unused-vars */
import * as React from 'react'
import {Link} from "react-router-dom"
import Logocentro from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/logo.png'
import Logo_fundo from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/fundo_parede.png'
import Blusa1 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_masculina_frio/moletom1.png'
import Blusa2 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_masculina_frio/moletom2.png'
import Blusa3 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_masculina_frio/moletom3.png'
import Blusa4 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_masculina_frio/moletom4.png'
import Blusa5 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_masculina_frio/moletom5.png'

import Blusa1f from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_feminina_frio/sueter01.png'
import Blusa2f from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_feminina_frio/sueter02.png'
import Blusa3f from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_feminina_frio/sueter03.png'
import Blusa4f from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_feminina_frio/sueter04.png'
import Blusa5f from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/blusa_feminina_frio/sueter05.png'

import Rapazmodelo from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/fundo_modelo/modelo-mascuolino.png'
import Moçamodelo from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/fundo_modelo/modelo-feminina.png'
import Tenismodelo from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/fundo_modelo/tenis_modelo.png'
import Sandaliamodelo from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/fundo_modelo/sandalia-modelo.png'

import Tenis1 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/Tenis/tenis01.png'
import Tenis2 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/Tenis/tenis06.png'
import Tenis3 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/Tenis/tenis10.png'
import Tenis4 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/Tenis/tenis07.png'
import Tenis5 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/Tenis/tenis05.png'

import Sandalia1 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/sandália_feminina/sandalia01.png'
import Sandalia2 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/sandália_feminina/sandalia08.png'
import Sandalia3 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/sandália_feminina/sandalia06.png'
import Sandalia4 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/sandália_feminina/sandalia04.png'
import Sandalia5 from '/Users/moise/Desktop/Projetos/REACT/LOJA_ROUPAS/loja_roupas/src/imagens/sandália_feminina/sandalia05.png'

const Home =()=>{

      const base_superior={
        width:"260px",
        height:"385px",
        margin:"auto",
        textDecoration:"none",
        color:"black",
        backgroundColor:"silver"
      }
      const centro={
        width:"auto",
        height:"auto",
        textAlign:"center", 
      }
      
      const fundo_produtos={
        width:"auto",
        height:"auto",

      borderRadius:"20px",
  display:"flex",
flexWrap:"wrap",

      }
      const base_nome={
        width:"260px",
        height:"40px",
        backgroundColor:"silver",
      }
      const preço_style_nome={
           fontFamily:"Arial",
        textAlign:"center",
           fontWeight:"bold",
           fontSize:"18px"
          }
      const p_nome ={
        textAlign:"center",
        fontFamily:"monospace",
        fontWeight:"bold",
      fontSize:"20px",
      margin:"0px",
      lineHeight:"200%"
      }
      const rapaz_style_modelo={
      marginTop:"20px",
      display:"flex",
      flexWrap:"wrap",
      }
      const moça_style_modelo={
        marginTop:"20px",
        display:"flex",
        flexWrap:"wrap",
        margin:"auto"
        }
        const tenis_style_modelo={
          display:"flex",
          flexWrap:"wrap",
          margin:"auto"
          }

          
    return(

        <><section style={centro} id='txt'>
            <h1 
            style={{
                fontFamily:"monospace",
                fontSize:"80px",
            }}>MODA CASUAL</h1>
        </section>
        <img src={Rapazmodelo} style={rapaz_style_modelo} id='rapaz' />
        <section style={fundo_produtos}>

               <Link to="/moletom1" style={base_superior}>
                    <div style={base_superior}>
                        <div style={{
                          backgroundColor:"Gainsboro",
                            width: "260px", height: "300px",
                            marginBottom: "0px",
                            cursor: "pointer"
                        }}>
                            <img src={Blusa1}
                                style={{
                                    filter: "brightness(60%)",
                                    width: "270px", marginTop: "5px"
                                }}></img>
                        </div>
                        <div style={base_nome}>
                            <p style={p_nome}>Moletom de Lã</p>
                        </div>
                        <div style={preço_style_nome}>
                            <p>R$ 80,00</p>
                        </div>
                    </div></Link>

                <Link to="/moletom2" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                       backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa2}
                            style={{
                                filter: "brightness(60%)",
                                width: "270px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Moletom Básico</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 100,00</p>
                        </div>
                </div>
</Link>
                            <Link to="/moletom3" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa3}
                            style={{
                                filter: "brightness(60%)",
                                width: "270px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Moletom NYC</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 120,00</p>
                        </div>
                </div>
</Link>

                <Link to="/moletom4" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa4} style={{
                            filter: "brightness(60%)",
                            width: "260px", marginTop: "10px", marginLeft: "0px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Moletom Cinza</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 180,00</p>
                        </div>
                </div>
</Link>
                <Link to="/moletom5" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa5} style={{
                            filter: "brightness(50%)",
                            width: "270px", marginTop: "20px", marginLeft: "5px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Moletom Bmw</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 200,00</p>
                        </div>
                </div>
</Link>
            </section>

            <img src={Moçamodelo} style={moça_style_modelo} id='moça' />
            <section style={fundo_produtos}>

            <Link to="/sueter1" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa1f}
                            style={{
                                filter: "brightness(60%)",
                                width: "270px", marginTop: "10px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Suéter Inverno</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 140,00</p>
                        </div>
                </div>
</Link>
                <Link to="/sueter2" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa2f}
                            style={{
                                filter: "brightness(60%)",
                                width: "270px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Suéter Listras</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 85,90</p>
                        </div>
                </div>
</Link>
                <Link to="/sueter3" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa3f}
                            style={{
                                filter: "brightness(60%)",
                                width: "270px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Suéter Oliva</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 80,00</p>
                        </div>
                </div>
</Link>
                <Link to="/sueter4" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa4f} style={{
                            filter: "brightness(60%)",
                            width: "260px", marginTop: "10px", marginLeft: "0px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Suéter Primavera</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 85,00</p>
                        </div>
                </div>
</Link>
                <Link to="/sueter5" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Blusa5f} style={{
                            filter: "brightness(50%)",
                            width: "270px", marginTop: "20px", marginLeft: "5px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Suéter Rubi</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 84,00</p>
                        </div>
                </div>
</Link>
            </section>
            <br />
            <img src={Tenismodelo} style={tenis_style_modelo} id='tenis' />
            <section style={fundo_produtos}>

            <Link to="/tenis1" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Tenis1}
                            style={{
                                filter: "brightness(60%)",
                                width: "260px", marginTop: "10px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Tênis Caminhada</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 150,00</p>
                        </div>
                    
                </div>
</Link>
                <Link to="/tenis2" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Tenis5}
                            style={{
                                filter: "brightness(60%)",
                                width: "260px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Sapatênis</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 140,00</p>
                        </div>
                </div>
</Link>
                <Link to="/tenis3" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Tenis2}
                            style={{
                                filter: "brightness(60%)",
                                width: "260px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Tênis Polo</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 80,00</p>
                        </div>
                </div>
</Link>
                <Link to="/tenis4" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Tenis3} style={{
                            filter: "brightness(60%)",
                            width: "260px", marginTop: "10px", marginLeft: "0px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Tênis Nike</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 250,00</p>
                        </div>
                </div>
</Link>
                <Link to="/tenis5" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Tenis4} style={{
                            filter: "brightness(50%)",
                            width: "260px", marginTop: "20px", marginLeft: "5px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Tênis AllStar</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 150,00</p>
                        </div>
                </div>
</Link>
            </section>
            <br />
            <img src={Sandaliamodelo} style={tenis_style_modelo} id='sandalia' />
            <section style={fundo_produtos}>

            <Link to="/sandalia1" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Sandalia1}
                            style={{
                                filter: "brightness(100%)",
                                width: "270px", marginTop: "10px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Salto Alto</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 80,00</p>
                        </div>
                </div>
</Link>  
                <Link to="/sandalia2" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Sandalia2}
                            style={{
                                filter: "brightness(100%)",
                                width: "270px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Sandâlia Púrpura</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 75,00</p>
                        </div>
                </div>
</Link>
                <Link to="/sandalia3" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Sandalia3}
                            style={{
                                filter: "brightness(100%)",
                                width: "270px", marginTop: "5px", marginLeft: "0px"
                            }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Sandâlia Pérola</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 84,00</p>
                        </div>
                </div>
</Link>
                <Link to="/sandalia4" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Sandalia4} style={{
                            filter: "brightness(100%)",
                            width: "260px", marginTop: "10px", marginLeft: "0px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Salto Alto Tropical</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 84,00</p>
                        </div>
                </div>
</Link>
                <Link to="/sandalia5" style={base_superior}>
                <div style={base_superior}>
                    <div style={{
                        backgroundColor:"Gainsboro",
                        width: "260px", height: "300px",
                        marginBottom: "0px",
                        cursor: "pointer"
                    }}>
                        <img src={Sandalia5} style={{
                            filter: "brightness(100%)",
                            width: "270px", marginTop: "20px", marginLeft: "5px"
                        }}></img>
                    </div>
                    <div style={base_nome}>
                        <p style={p_nome}>Sandálias</p>
                    </div>
                    <div style={preço_style_nome}>
                            <p>R$ 74,00</p>
                        </div>
                </div>
</Link>
            </section></>
    );
}
export default Home
