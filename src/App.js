import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import PageNotFound from "./components/Pages/PageNotFound";
import Contact from "./components/Pages/Contact";
import Media from "./components/Pages/Media";
import Programs from "./components/Pages/Programs";
import About from "./components/Pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/programs" element={<Programs />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
