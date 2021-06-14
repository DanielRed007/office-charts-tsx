import React from "react";
import { useStyles } from "./styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Doughnut from "../../charts/Doughnut/Doughnut";
import Pie from "../../charts/Pie/Pie";
import Bar from "../../charts/Bar/Bar";
import TabPanel from "./TabPanel";

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SideBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
        <>
          <Pie />
        </>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <>
          <Bar />
        </>
      </TabPanel>
    </div>
  );
}
