import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return <BrowserRouter>
  
    <Layout>
      <Routes>
        <Route path="/inicio"/>
        <Route path="/computadoras" element={<h1>Listado de computadoras</h1>} />
        <Route path="/celulares" element={<h1>Listado de Celulares</h1>} />
        <Route path="/smarttv" element={<h1>Listado de Smart Tv</h1>} />
        <Route path="/electrodomesticos" element={<h1>Listado de Electrodomesticos</h1>} />
        <Route path="/ubicacion" element={<h1>Ubicacion</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <ItemListContainer saludo={"Bienvenidos!!"} />
    </Layout>
  </BrowserRouter>;
}

export default App;
