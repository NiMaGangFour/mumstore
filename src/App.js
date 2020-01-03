import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import "./components/css/components.css";

import Header from "./components/Header/Header";
import Landing from "./components/Pages/Landing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import News from "./components/Pages/News";
import MessageWedge from "./components/UI/MessageWedge";
import FooterLists from "./components/Footer/FooterLists";
import FooterNaviBar from "./components/Footer/FooterNaviBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Contact} />
        <Route exact path="/safeisbest" component={Contact} />
        <Route exact path="/news" component={News} />
      </Switch>
      <FooterLists />
      <FooterNaviBar />

      <MessageWedge />
    </div>
  );
}

export default App;
