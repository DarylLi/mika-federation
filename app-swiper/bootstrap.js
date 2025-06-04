import React from "react";
import ReactDom from "react-dom";
import Swiper from "./src/Swiper.tsx";

const App = () => {
  return (
    <div className="mainRoot">
      <h1>swiper page</h1>
      <Swiper length={5} />
    </div>
  );
};
export default App;
ReactDom.render(<App />, document.getElementById("app"));
