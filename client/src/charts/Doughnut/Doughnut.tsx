import React, {useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";
import { loadGraphicBarData } from "../../state/actions/graphicBarActions";

interface DataSetLabelProps {
  labels: any[];
  datasets: any[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// const data: DataSetLabelProps = {
//   // aqui hago una llamada que retorne dicho objeto

//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgba(255,99,132,0.2)",
//       borderColor: "rgba(255,99,132,1)",
//       borderWidth: 1,
//       hoverBackgroundColor: "rgba(255,99,132,0.4)",
//       hoverBorderColor: "rgba(255,99,132,1)",
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

const GraphicDoughnut = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const graphicBar = useSelector((state:any) => state.graphicBar);


  const handleChange = (event:any) => {
    // make the api call here to get the data
    setAge(event.target.value);
    dispatch(loadGraphicBarData());
  };

  useEffect(() => {
  },[])

  return (
    <div>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Office Supplies by Statistics</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Doughnut type="doughnut" data={graphicBar.data[0]} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Doughnut type="doughnut" data={graphicBar.data[1]} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Doughnut type="doughnut" data={graphicBar.data[2]} />
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default GraphicDoughnut;
