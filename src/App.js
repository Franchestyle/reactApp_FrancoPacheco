import "./App.css";
import Navbar from "./components/navegation/Navbar";
import Productos from "./components/pages/Productos";
import Nosotros from "./components/pages/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailcontainer from "./components/ItemDetailcontainer";

function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Productos/:id' element={<ItemDetailcontainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
