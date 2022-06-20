import React, { useEffect, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';


export default function GetAddress() {
  const [addresses, setAddresses] = useState([]);

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
            <TableCell>Id</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.map((address) => (
            <TableRow
              key={address.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {address.id}
              </TableCell>
              <TableCell align="right">{address.city}</TableCell>
              <TableCell align="right">{address.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


