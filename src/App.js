//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegation/Navbar';
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';
import Nosotros from './components/pages/Nosotros';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <Navbar/>
      <ItemListContainer/>
    </Router>
  );
}

export default App;
