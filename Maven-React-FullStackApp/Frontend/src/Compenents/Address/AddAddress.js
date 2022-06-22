import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./Address.css";


export default function Address() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [plaque, setPlaque] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const address = { city, state, plaque };
    console.log(address);
    fetch("http://localhost:8080/address/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    }).then(() => {
      console.log("New Address added");
    });
  };
  return (
    <form noValidate autoComplete="off">
      <h1>Add Address</h1>
      <TextField
        id="outlined-basic"
        label="City Name"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{marginTop: '15px'}}
      />
      <TextField
        id="outlined-basic"
        label="State Name"
        variant="outlined"
        fullWidth
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{marginTop: '15px'}}
      />
        <TextField
        id="outlined-basic"
        label="Plaque Number"
        variant="outlined"
        fullWidth
        value={plaque}
        onChange={(e) => setPlaque(e.target.value)}
        style={{marginTop: '15px'}}
      />
      <Button
        variant="contained"
        className="submitButton"
        color="secondary"
        onClick={handleClick}
        style={{marginTop: '15px'}}
      >
        Submit
      </Button>
    </form>
  );
}
