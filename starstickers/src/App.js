import './App.css';
import NavBar from  './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/catalog';

function App() {
  return ( <div className="App">
            <NavBar></NavBar>
            <h1>Hello World!</h1>
            <Catalog></Catalog>
            <Footer></Footer>
          </div> );
}

export default App;
