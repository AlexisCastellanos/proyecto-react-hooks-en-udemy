import React from "react";
import { Container, Typography, Card, Grid } from "@material-ui/core";

export default () => {
  return (
    <Container>
      <Typography variant="h4">Home</Typography>
      <Card>
        <Grid>
          <Typography>Bienvenido!</Typography>
        </Grid>
        <Grid>
          <label> Icono</label>
        </Grid>
      </Card>
    </Container>
  );
};
