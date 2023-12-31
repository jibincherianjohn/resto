
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Singleview from './pages/Singleview';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>} ></Route>
       <Route path='/view/:id' element={<Singleview></Singleview>} ></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
