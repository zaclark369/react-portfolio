import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {

  const [view, setView] = useState('About');

  return (
    <div classNameName="App">
      <Header></Header>
      
   </div>
  );
}

export default App;
