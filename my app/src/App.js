import Layout from "./components/Layout/Layout";
import { BrowserRouter,Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Payment from "./pages/payment";
import Amount from "./pages/OrderPlacing";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Pagenotfound/>} />
        <Route path="payment" element={<Payment/>}/>
        <Route path="amount" element={<Amount/>}/>

       
       


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;