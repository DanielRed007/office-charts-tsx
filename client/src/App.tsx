import React from "react";
import { Button } from "@material-ui/core";
import { test } from "./state/actions/testActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const testHandler = (e: any) => {
    e.preventDefault();
    dispatch(test());
  };

  return (
    <div>
      Hello
      <Button onClick={testHandler} variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
