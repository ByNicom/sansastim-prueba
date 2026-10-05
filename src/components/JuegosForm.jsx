import { CardActions, CardContent,Button, Card, CardHeader, TextField, Select, MenuItem, FormControlLabel,Switch} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
function JuegosForm() {
  const companias = [{label: "Sony", value: "sony"},
    {label: "Microsoft", value: "microsoft"},
    {label: "Nintendo", value: "nintendo"}]


  return (
    <Card raised>
      <CardHeader title="Registrar Juegos"></CardHeader>
      <CardContent>

        <div className="mt-3">
          <TextField
            id="nombre-juego"
            label="Nombre del juego"
            variant="outlined"
            fullWidth
          />  
          <div>
          <TextField
            id="descripcion-juego" 
            multiline
            label="Descripción del juego"
            variant="outlined"
            fullWidth
          />
          </div>
          <div className="mt-3">
            <Select label="Compañía del juego" id="compania-juego"  fullWidth>
              {companias.map((c)=>{
                return <MenuItem value={c.value}>{c.label}</MenuItem>
              })}
            </Select>
          </div>
          <div className="mt-3">
            <TextField id="Plataforma Juego" label="Plataforma" fullWidth>  </TextField>
          </div>
          <div>

              <DatePicker id="anio-juego" label="Año de lanzamiento" views={['year']} openTo="year" format="YYYY"  fullWidth/>

          </div>
          <div className="mt-3">
          
              <FormControlLabel id="fisico-juego"
                control={<Switch/>} labelplacement="start"
                label="Juego fisico disponible?"
              />
          </div>


        </div>

      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary">
          Registrar
        </Button>
      </CardActions>
    </Card>
  )
}
export default JuegosForm