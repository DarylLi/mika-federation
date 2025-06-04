import React from "react";
import ReactDom from "react-dom";
import Main from "./src/Main.jsx";
const App = () => {
  return (
    <div>
      <h1>Module Federated UI components</h1>
      <hr />
      okok
      <Main></Main>
      <br />
      <br />
    </div>
  );
};
export default App;
ReactDom.render(<App />, document.getElementById("app"));
