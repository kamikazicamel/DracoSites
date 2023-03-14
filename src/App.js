import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import MemberList from "./pages/MemberList";
import Navigator from "./components/Navigator/Navigator";
import AmplifyBridge from "./store/AmplifyBridge";
import MemberCreate from "./pages/MemberCreate";



function App() {
  return (
    <>
      <AmplifyBridge />
      <Header />
      <Router>
        <Navigator/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/memberList' element={<MemberList />} />
          <Route path='/memberCreate' element={<MemberCreate />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;