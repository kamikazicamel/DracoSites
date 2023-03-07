import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navigator from "./components/Navigator/Navigator";
import store from "./store";
import AmplifyBridge from "./store/AmplifyBridge";

new AmplifyBridge(store);

function App() {
  return (
    <>
      <Header />
      <Router>
        <Navigator/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;