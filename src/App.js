/* import logo from './logo.svg'; */
/* import './App.css'; */
import NabVar from './components/NabVar/NabVar';
import ItemListContainer from './components/Product/ItemListContainer.jsx';


function App() {
  let headerStyle = {
    backgroundColor: "#282c34",
    height: "14vh",
    display: "flex",
    justifyContent: "center",
    color: "white"
  };
  return (
    <>
      <header className="App-header" style = {headerStyle}>
          <h1>COMPU-ESPACIO</h1>
      </header>
      <NabVar/>
      <ItemListContainer greeting="Biembenidos a esta tienda de computación"/>
    </>
  );
}

export default App;

/*  -- por las dudas --
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NabVar/>
    </div>
  );
} */
