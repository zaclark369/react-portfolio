import React, {useState} from 'react';
import "./index.css"

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

 const [view, setView] = useState("about")
  
  // const handleView = (page) => {
  //   setView(page);
  //   }
  

  return (
    <div className="App">
      <Header></Header>
        <Nav view={view} setView={setView}></Nav>
      
      <main>
      {view !== "contact" ? (
        <>
        {view !== "about" && <About/>}
        {view !== "portfolio" && <Portfolio/>}
        {view !== "resume" && <Resume/>}
        
        </>
      ) : (
        <Contact />
      )}
      </main>
      <Footer className="d-flex"></Footer>
   </div>
   
  );
}

export default App;
