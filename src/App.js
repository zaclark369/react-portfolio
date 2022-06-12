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
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

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
