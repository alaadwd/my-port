import './App.css';
import Home from './components/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import SharedLayout from './components/SharedLayout';


function App() {
  return (
    <BrowserRouter className=" ">
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path= "ContactMe" element={<ContactMe/>}/>
          <Route path= "Portfolio" element={<Portfolio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
