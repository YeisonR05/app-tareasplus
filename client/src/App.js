import './App.css';
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Metodology, PricesWarranty, Services, About} from './Views'
import NavBar from './Components/NavBar/NavBar';
import WhatsAppButton from './Components/Chat/WhatsAppButton';
import FooterNav from './Components/FooterNav/FooterNav';



function App() {
  return (
    <div className="App">
      <Router>
        <WhatsAppButton />
        <NavBar />
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route exact path='/about' element={ <About/> }/>
            <Route exact path='/services' element={ <Services/> }/>
            <Route exact path='/metodology' element={ <Metodology/> }/>
            <Route exact path='/priceswarranty' element={ <PricesWarranty/> }/>
          </Routes>
        <FooterNav />
      </Router>
    </div>
    
  );
}

export default App;
