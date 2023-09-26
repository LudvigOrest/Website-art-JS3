import './App.css';
import './styles/styles.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Shop from './components/Shop';
import Footer from './components/Footer';

export let imageList = [];

function App() {
  return (
    <container id="main-container">
        <Header />
        <Banner />
        <Shop />
        <Footer />
    </container>
  );
}

export default App;
