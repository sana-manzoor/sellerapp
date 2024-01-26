import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Products from './pages/Products';
import { Route,Routes } from 'react-router-dom';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>

      <Route path='/category' element={<Category/>}/>
      

     </Routes>
    <Footer/>


    </div>
  );
}

export default App;
