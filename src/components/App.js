// import logo from '../logo.svg';
import '../css/App.css';
import AppNavbar from './Navbar';
import HomeSpash from './HomeSpash';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <AppNavbar/>
        <HomeSpash/>
        <Footer/>
    </div>
  );
}

export default App;
