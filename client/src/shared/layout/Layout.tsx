import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../sidebar/Sidebar";
import { History } from "history";
import { Route, Link, Switch, Redirect, Router } from "react-router-dom";
import Doughnut from "../../charts/Doughnut/Doughnut";
import Pie from "../../charts/Pie/Pie";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export interface LayoutProps {
  history: History;
  /* other props for ChildComponent */
}

export const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <div
            style={{ width: "100%", height: "100%", border: "1px solid black" }}
          >
            {/* <Switch>
              <Route path="/charts/doughnut" component={Doughnut} />
              <Route path="/charts/pie" component={Pie} />
              <Redirect to="/" />
            </Switch> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
