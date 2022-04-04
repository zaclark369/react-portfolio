import React, {useState} from 'react';

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

 const [view, setView] = useState("About")
  
  const handleView = (page) => {
    setView(page);
    }
  

  return (
    <div className="App">
      <Header
          handleView={handleView}>
        </Header>
      
        {/* {(() => {
      switch (view) {
      case "About":
        return <About handleView={handleView}></About>
        case "Contact": 
        return (<Contact/>)
        case "Portfolio":
          return (<Portfolio/>)
          // case Resume:
          //   return (<Resume/>)
          default:
            break;

          }
        })()} */}
            
            <About></About>
            
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Resume></Resume>
      <Footer></Footer>
   </div>
   
  );
}

export default App;
