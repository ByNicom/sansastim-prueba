import { Card,CardContent, Table, TableCell,TableContainer,TableRow, TableHead,TableBody, Alert } from '@mui/material'
import React from 'react'

function JuegosView({juegos=[]}) {
    if(!juegos?.length
    ){
        return <Alert severity="info">No hay juegos registrados</Alert>
    }
  return (
    <Card>  
        <CardContent>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Plataforma</TableCell>
                            <TableCell>Compañía</TableCell>
                            <TableCell>Físico</TableCell>
                            <TableCell>Año</TableCell>
                        </TableRow>    
                    </TableHead>
                    <TableBody>
                        {juegos.map((j)=>
                        <TableRow key={j.nombre}>
                            <TableCell>{j.nombre}</TableCell>
                            <TableCell>{j.descripcion}</TableCell>
                            <TableCell>{j.plataforma}</TableCell>
                            <TableCell>{j.compania}</TableCell>
                            <TableCell>{j.fisico?"Sí":"No"}</TableCell>
                            <TableCell>{j.anio.year()}</TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  )
}

export default JuegosView
