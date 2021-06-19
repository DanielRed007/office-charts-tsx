import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import Doughnut from "../../charts/Doughnut/Doughnut";
import MainGridView from "../../graphic-views/main-grid-view/MainGridView";
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

export default function SideBar() {
  const dispatch = useDispatch();

  const graphicBar = useSelector((state: any) => state.graphicBar);
  const { data } = graphicBar;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(data);
    dispatch(loadGraphicBarData());
  }, [dispatch]);

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
        <Doughnut />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MainGridView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Grid container spacing={1}>
          {data.map((set: any, index: any) => (
            <Grid container item xs={12} spacing={3}>
              <Bar data={set} key={index} />
            </Grid>
          ))}
        </Grid> */}
      </TabPanel>
    </div>
  );
}
