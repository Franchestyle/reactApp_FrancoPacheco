import "./App.css";
import Navbar from "./components/navegation/Navbar";
// import Inicio from "./components/pages/Inicio";
// import Productos from "./components/pages/Productos";
// import Nosotros from "./components/pages/Nosotros";
import Booster from "./components/Booster";
import ItemCount from "./components/ItemCount";

function App() {


  return (
    <>
      <Navbar />
      <ItemCount/>
      <Booster/>
    </>
  );
}

export default App;
