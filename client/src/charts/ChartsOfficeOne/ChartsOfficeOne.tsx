import React from "react";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from '@material-ui/core/Container';
import { useChartOfficeStyles } from "./chartOfficeStyles";
interface ChartsOfficeOneProps {
  graphicData: any[];
}

const ChartsOfficeOne: React.FC<ChartsOfficeOneProps> = ({ graphicData }) => {
  const classes = useChartOfficeStyles();

  return (
    <Container className={classes.containerBox} maxWidth={false}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <h1>Office Supplies Sales by Statistics</h1>
            </Paper>
          </Grid>

          {graphicData[0] ? (
            <Grid item xs={4}>
              <Paper elevation={3} className={classes.paper}>
                <h1># By City</h1>
                <Doughnut type="doughnut" data={graphicData[0]} />
              </Paper>
            </Grid>
          ) : (
            <CircularProgress />
          )}

          {graphicData[1] ? (
            <Grid item xs={4}>
              <Paper elevation={3} className={classes.paper}>
                <h1># By Purchase Method</h1>
                <Pie type="pie" data={graphicData[1]} />
              </Paper>
            </Grid>
          ) : (
            <CircularProgress color="secondary" />
          )}

          {graphicData[2] ? (
            <Grid item xs={4}>
              <Paper elevation={3} className={classes.paper}>
                <h1># By Gender</h1>
                <Bar
                  type="bar"
                  data={graphicData[2]}
                  options={graphicData[2].options}
                />
              </Paper>
            </Grid>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </Grid>
      </div>
    </Container>
  );
};

export default ChartsOfficeOne;
