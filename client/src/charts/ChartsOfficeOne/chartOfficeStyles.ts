import { makeStyles } from "@material-ui/core/styles";

export const useChartOfficeStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    containerBox: {
      marginTop: "4rem",
      width: "90%"
    }
}));