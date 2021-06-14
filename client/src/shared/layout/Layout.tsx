import React from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../sidebar/Sidebar";

export const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};
