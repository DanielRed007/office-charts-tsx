
import Box from "@material-ui/core/Box";
import { TabPanelProps } from "../interface/TabPanelProps";

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div      
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width: "100%"}}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
