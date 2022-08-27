//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App(props) {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer greeting={"Comming Soon"}/>
    </div>
  );
}

export default App;
