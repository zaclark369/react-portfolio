import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

  // const [view, setView] = useState('About');

  return (
    <div classNameName="App">
      <Header></Header>
      <main>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <About></About>
      </main>
      <Footer></Footer>
   </div>
   
  );
}

export default App;
