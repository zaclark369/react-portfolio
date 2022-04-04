import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

 const [view, setView] = useState("About")
  
  function render(current) {
    switch (current) {
      case "About":
        return (<About/>)
        case "Contact": 
        return (<Contact/>)
        case "Portfolio":
          return (<Portfolio/>)
          // case Resume:
          //   return (<Resume/>)
          default:
            break;
    }
  }

  return (
    <div classNameName="App">
      <Header view={view} setView= {setView}/>
      
      {render(view)}

      <Footer></Footer>
   </div>
   
  );
}

export default App;
