import './App.css'
import Saludo from './PROPS/n1'
import Saludodos from './PROPS/n2'
import Contenedor from './PROPS/n3'
import Contador from './PROPS/n4'
function App() {
  const {contador, incrementar} = Contador()
  return (
    // <div className="App">
    //   EJERCICIO 1 <Saludo nombre='Usme' />
    //   EJERCICIO 2 <Saludodos nombre='Usme' idioma='en'/>
    // </div>

    /*EJERCICIO 3 <Contenedor>
    <h1>Titulo hermoso</h1>
    <p>Este es un párrafo dentro del contenedor</p>
  </Contenedor>*/

  
  <div>
    <p>
      Has hecho clic {contador}
    </p>
    <button onClick={incrementar}> Clic </button>
  </div>

  )
} 

export default App