import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import styles from './styles';

export default () => {
  const [searchText, setSearchText] = useState("");
  const classes=styles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  console.log(searchText);

  const handleSearchTextClick=event =>{
    console.log('handleSearchTextClick');
  };

  const handleCleanTextClick=event =>{
    console.log('handleCleanTextClick');
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Home</Typography>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Typography className={classes.title}>Bienvenido!</Typography>
        </Grid>
        <Grid>
          <label> Icono</label>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          className={classes.textFieldSearch}
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.searchButton}
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
