import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const SelBooks=({data})=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'lightgray'}}>
          <TableRow>
            
            <TableCell align="left">Szerző</TableCell>
            <TableCell align="left">Cím</TableCell>
            <TableCell align="left">Kategória</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(obj => (
            <TableRow
              key={obj.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {obj.title}
              </TableCell>
              <TableCell align="left">{obj.author}</TableCell>
              <TableCell align="left">{obj.category}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}