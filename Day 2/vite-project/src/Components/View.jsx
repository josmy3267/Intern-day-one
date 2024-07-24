import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const rows=[{"name":"Aruna","adm":"CHO234","Department":"Chemistry","Semester":"s4"},
            {"name":"Beena","adm":"CHO235","Department":"Cs","Semester":"s4"},
            {"name":"Meena","adm":"CHO236","Department":"Physics","Semester":"s6"}];

const View=()=> {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setRows(res.data.users);
    })
  },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> firstName</TableCell>
          <TableCell align="right">lastName</TableCell>
          <TableCell align="right">gender</TableCell>
          <TableCell align="right">email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.firstName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstName}
            </TableCell>
            <TableCell align="right">{row.lastName}</TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
  
}

export default View