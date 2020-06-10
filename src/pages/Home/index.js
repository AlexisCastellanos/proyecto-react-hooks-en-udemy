import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import { MovieIcon } from "../../icons";
import styles from "./styles";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  // console.log(searchText);

  const handleSearchTextClick = (event) => {
    console.log("handleSearchTextClick");
    history.push(`/results?movieName=${searchText}`);
  };

  const handleClearTextClick = (event) => {
    console.log("handleCleanTextClick");
    setSearchText("");
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          className={classes.textFieldSearch}
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleClearTextClick}>
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
