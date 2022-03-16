import './App.css';
import NavBar from  './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return ( <div className="App">
            <NavBar></NavBar>
            <h1>Hello World!</h1>
            <Catalog></Catalog>
            <Footer></Footer>
          </div> );
}

export default App;
