import React from "react";
import "../estilos/boton.css"
function Boton({texto,Botonclick,manejador}){
    return (
        <button className={Botonclick ? 'boton-click':'boton-reiniciar'}
        onClick={manejador}>
            {texto}
        </button>
    );
}

export default Boton;