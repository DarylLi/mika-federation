import React from "react";
import Button from "appReact/Button"
import Main from "appReact/Main"
import Swiper from "appSwiper/Swiper"
import { useLayoutEffect } from "react";
import { createApp } from "vue";
import VueApp from "vueApp/vueMain";
import VueFoot from "vueApp/vueFoot";


const App = () => {
  useLayoutEffect(()=>{
    const app = createApp(VueApp);
    const app2 = createApp(VueFoot);
    app.mount("#vueApp");
    app2.mount("#vueApp2");
  })
  return <>this is App<Button>hohoho!</Button><div>
    <Main/>
    <div id="vueApp"></div>
    <div id="vueApp2"></div>
    <Swiper length={12}/>
    </div></>;
};

export default App;
