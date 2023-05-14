import Navbar from './Navbar';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"
import Accordion from './Components/Accordion';
import AccordionWithBtn from './Components/AccordionWithBtn';

function App() {
  
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/example5" element={<Accordion/>} />
        <Route path="/example6" element={<AccordionWithBtn/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;
