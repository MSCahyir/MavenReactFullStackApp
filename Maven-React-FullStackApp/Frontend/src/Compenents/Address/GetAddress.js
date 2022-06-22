import React, { useEffect, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


export default function GetAddress() {
  const [addresses, setAddresses] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  useEffect(() => {
    fetch("http://localhost:8080/address/getAll")
      .then((res) => res.json())
      .then((result) => {
        setAddresses(result);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} style={{ width: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <StyledTableCell align="left">Id</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
            <StyledTableCell align="left">State</StyledTableCell>
            <StyledTableCell align="left">Plaque</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.map((address) => (
            <StyledTableRow
              key={address.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row"> {address.id} </StyledTableCell>
              <StyledTableCell align="left">{address.city}</StyledTableCell>
              <StyledTableCell align="left">{address.state}</StyledTableCell>
              <StyledTableCell align="left">{address.plaque}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
