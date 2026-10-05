import React from 'react'
import JuegosForm from '../components/JuegosForm'

function JuegosContainer() {
    const handleCreate = (juego)=>{
        console.log("Juego creado en el container", juego);
    };


  return (
    <div className="container">
        <div className="row">

            <div className="col-md-4">
                <JuegosForm onCreateJuego={handleCreate}/>
            </div>          

            <div className="col-md-8">
                <h1>Listado de juegos</h1>  
            </div>  

        </div>

    </div>
  )
}

export default JuegosContainer
