import { useState } from 'react'
import './App.css'
import Boton from './componentes/Boton'
import Logo from "./imagenes/freecodecamp-logo.png";
import Contador from "./componentes/contador";
function App() {

  const [numclicks,setnumClick] = useState(0);

const click = ()=>{
  setnumClick(numclicks + 1);
}


const rest = ()=>{
  setnumClick(0);
}

  return(
    <div className="App">
      <div className='logo-contenedor'>
      <img className='logo-academy' src={Logo} />
      </div>
      <div className='contenedor-principal'>
        
        <Contador clicks={numclicks}/>
        <Boton
        texto="clic"
        Botonclick={true}
        manejador={click}
         />

         <Boton
        texto="Reiniciar"
        Botonclick={false}
        manejador={rest}
         />
      </div>
    </div>
  )
}

export default App
