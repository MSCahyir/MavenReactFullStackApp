import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Address() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const address = { city, state };
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
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>
          Add Address
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="State Name"
            variant="outlined"
            fullWidth
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
