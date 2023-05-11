import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
