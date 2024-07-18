import React from "react";
import "../estilos/contador.css"
function contador({clicks}){
    return(
        <div className="contador">
        {clicks}
        </div>
    );
}

export default contador;