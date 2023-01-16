import './App.css';
import Article from './Components/Article';
import Choose from './Components/Choose';
import FirstPage from './Components/FirstPage';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <FirstPage />
      <Choose />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
