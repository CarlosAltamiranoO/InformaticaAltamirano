
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NabVar/NavBar';
import ItemListContainer from './components/Product/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './context/cartContext';


function App() {
  let headerStyle = {
    backgroundColor: "#282c34",
    height: "14vh",
    display: "flex",
    justifyContent: "center",
    color: "white"
  };
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header" style = {headerStyle}>
          <h1>COMPU-ESPACIO</h1>
        </header>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Biembenidos a esta tienda de computación"/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h2>404: Estamos experimentando dificultades tecnicas</h2>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

