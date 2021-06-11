import React from "react";
import { Button } from "@material-ui/core";
import { test } from "./state/actions/testActions";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./shared/layout/Layout";
import { History } from "history";

interface AppProps {
  history: History;
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  const testHandler = (e: any) => {
    e.preventDefault();
    dispatch(test());
  };

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
