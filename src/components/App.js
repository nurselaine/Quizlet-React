import logo from '../logo.svg';
import '../css/App.css';
import Navbar from './Navbar';
import HomeSpash from './HomeSpash';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HomeSpash/>
        <Footer/>
    </div>
  );
}

export default App;
