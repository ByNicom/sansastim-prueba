import { CardActions, CardContent,Button, Card, CardHeader, TextField, Select, MenuItem, FormControlLabel,Switch} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React,{useState} from 'react'
function JuegosForm({onCreateJuego=()=>{}}) {
  const companias = [{label: "Sony", value: "sony"},
    {label: "Microsoft", value: "microsoft"},
    {label: "Nintendo", value: "nintendo"}]
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [compania, setCompania] = useState(companias[0].value);
  const [plataforma, setPlataforma] = useState("");
  const [anio, setAnio] = useState(null);
  const [fisico, setFisico] = useState(false);

  const handleClick = (e) => {
    //contenido de un juego y hacerlo un objeto
    const juego = {};
    juego.nombre = nombre;
    juego.descripcion = descripcion;
    juego.compania = compania;
    juego.plataforma = plataforma;
    juego.anio = anio;
    juego.fisico = fisico;
    //enviar al container el juego nuevo
    onCreateJuego(juego);
  }

  return (
    <Card raised>
      <CardHeader title="Registrar Juegos"></CardHeader>
      <CardContent>

        <div className="mt-3">
          <TextField
            id="nombre-juego" label="Nombre del juego" 
            value={nombre} onChange={(e) => setNombre(e.target.value)} 
            variant="outlined" fullWidth
          />  
          <div className="mt-3">
          <TextField
            id="descripcion-juego" multiline label="Descripción del juego"
            value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}
            variant="outlined" fullWidth
            />
          </div>
          <div className="mt-3">
            <Select label="Compañía del juego" 
             value={compania} onChange={(e)=> setCompania(e.target.value)}
            id="compania-juego" fullWidth>
              {companias.map((c)=>{
                return <MenuItem value={c.value}>{c.label}</MenuItem>
              })}
            </Select>
          </div>
          <div className="mt-3">
            <TextField id="Plataforma Juego"  
            value={plataforma} onChange={(e) => setPlataforma(e.target.value)}
            label="Plataforma" fullWidth>  </TextField>
          </div>
          <div className="mt-3">

              <DatePicker id="anio-juego" value={anio} onChange={(v) => setAnio(v)} label="Año de lanzamiento" views={['year']} openTo="year" format="YYYY"  fullWidth/>

          </div>
          <div className="mt-3">
          
              <FormControlLabel id="fisico-juego"
                checked={fisico} onChange={(e) => setFisico(e.target.checked)}
                control={<Switch/>} labelplacement="start"
                label="Juego fisico disponible?"
              />
          </div>


        </div>

      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" onClick={handleClick}>
          Registrar
        </Button>
      </CardActions>
    </Card>
  )
}
export default JuegosForm