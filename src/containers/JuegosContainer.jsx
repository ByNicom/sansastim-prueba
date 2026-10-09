import React,{useState} from 'react'
import JuegosForm from '../components/JuegosForm'
import JuegosView from '../components/JuegosView'
import { Snackbar, Alert } from '@mui/material'
function JuegosContainer() {

    const [juegos, setJuegos] = useState([]);//no se puede usar undefined
    const [alert, setAlert] = useState(false);
    const handleCreate = (juego)=>{
        console.log("Juego creado en el container", juego);
        setJuegos([...juegos, juego]);
        setAlert(true);
    };
    const handleDelete = (juego)=>{
      setJuegos(juegos.filter((j)=> {return j?.nombre != juego?.nombre}));
    }

  return (
    <>
    <div className="container">
        <div className="row">

            <div className="col-md-4">
                <JuegosForm onCreateJuego={handleCreate}/>
            </div>          

            <div className="col-md-8">
                <JuegosView juegos={juegos} onQuitar={handleDelete}/>
            </div>  

        </div>

    </div>
    <Snackbar open={alert} autoHideDuration={1000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert
          severity="success"
          variant="filled"
          
          sx={{ width: '100%' }}
        >
          Juego registrado exitosamente!
        </Alert>
      </Snackbar>
    </>
  )
}

export default JuegosContainer
