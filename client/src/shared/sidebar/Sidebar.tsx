import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import ChartsOfficeOne from "../../charts/ChartsOfficeOne/ChartsOfficeOne";
import MainGridView from "../../graphic-views/main-grid-view/MainGridView";
import TabPanel from "./TabPanel";
import { loadGraphicBarData } from "../../state/actions/graphicBarActions";

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
    console.log(data);
    setValue(newValue);
  };

  useEffect(() => {
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
        <Tab label="Office A" {...a11yProps(0)}></Tab>
        <Tab label="Pie" {...a11yProps(1)}></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        {data && <ChartsOfficeOne graphicData={data} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MainGridView />
      </TabPanel>
    </div>
  );
}
