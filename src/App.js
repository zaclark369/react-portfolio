import React, {useState} from 'react';

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

 const [view, setView] = useState("About")
  
  const renderView = (page) => {
    setView(page);
    }
  

  return (
    <div className="App">
      <Header
          handleView={renderView}>
        </Header>
      <main>
        {(() => {
      switch (view) {
      case "About":
        return <About handleView={renderView}></About>
        case "Contact": 
        return (<Contact/>)
        case "Portfolio":
          return (<Portfolio/>)
          // case Resume:
          //   return (<Resume/>)
          default:
            break;

          }
        })()}
            </main>
      <Footer></Footer>
   </div>
   
  );
}

export default App;
