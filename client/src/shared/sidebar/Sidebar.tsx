import React, { useState, useEffect, forwardRef } from "react";
import { useStyles } from "./styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import * as chartjs from "chart.js";
import { Props } from "../../charts/Pie/pie-types";
import Doughnut from "../../charts/Doughnut/Doughnut";
import Pie from "../../charts/Pie/Pie";
import Bar from "../../charts/Bar/Bar";
import TabPanel from "./TabPanel";
import { loadGraphicBarData } from "../../state/actions/graphicBarActions";
import { Grid } from "@material-ui/core";

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// export const PieComponent = ((props:Props) => (
//   <Pie {...props} type="pie" options={props.options || {}} />
// ));

export default function SideBar() {
  const dispatch = useDispatch();

  const graphicBar = useSelector((state: any) => state.graphicBar);
  const { data: bar } = graphicBar;

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [data, setData] = useState(null);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const barDataList = [
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: null,
        },
      ],
    },
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: null,
        },
      ],
    },
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: null,
        },
      ],
    },
  ];

  const barData = [
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: null,
        },
      ],
    },
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: null,
        },
      ],
    },
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: null,
          borderColor: "#383838",
          borderWidth: 4,
          hoverBackgroundColor: "#505050",
          hoverBorderColor: "#909090",
          data: null,
        },
      ],
    },
  ];

  useEffect(() => {
    // setData([[65, 12, 35, 94, 72, 55, 40]]);
    dispatch(loadGraphicBarData());
    setData(bar);
    console.log(bar);
  }, []);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Doughnut" {...a11yProps(0)}></Tab>
        <Tab label="Pie" {...a11yProps(1)}></Tab>
        <Tab label="Bar" {...a11yProps(2)}></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        <>
          <Doughnut />
        </>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <>{/* <Pie {...props} type="pie" options={props.options || {}} /> */}</>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={1}>
          {bar.map((set: any, index: any) => (
            <Grid container item xs={12} spacing={3}>
              <Bar data={set} key={index} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </div>
  );
}
