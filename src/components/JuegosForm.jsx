import { CardActions, CardContent,Button, Card, CardHeader, TextField } from '@mui/material'
import React from 'react'
function JuegosForm() {
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