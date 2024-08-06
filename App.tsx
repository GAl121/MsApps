/* eslint-disable quotes */
import {StatusBar} from "react-native";
import React from "react";
import {Provider} from "react-redux";
import Main from "./src/components/Main";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <Main />
    </Provider>
  );
};

export default App;
