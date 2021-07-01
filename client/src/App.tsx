import React from "react";
import { test } from "./state/actions/testActions";
import { useDispatch } from "react-redux";
import { Layout } from "./shared/layout/Layout";

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
