import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
