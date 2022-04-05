import React, { useState } from "react";
import "./index.css";

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [view, setView] = useState("about");

  // const handleView = (page) => {
  //   setView(page);
  //   }

  return (
    <div className="App">
      <div>
      <Header></Header>
      <Nav view={view} setView={setView}></Nav>
      </div>
      <main>
        {view !== "contact" ? (
          <>
            {view === "portfolio" && <Portfolio />}
            {view === "resume" && <Resume />}
            {view === "about" && <About />}
          </>
        ) : (
          <Contact className="form-inline" />
        )}
      </main>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
