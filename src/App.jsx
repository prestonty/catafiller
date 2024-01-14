import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Header from './compns/header.jsx';
import Home from './compns/home.jsx';
import Capsule from './compns/capsule.jsx';
import User from './compns/user.jsx';
import Fluox from './compns/fluox.jsx';
import Healthcard from './compns/healthcard.jsx';
import RefillSent from './compns/refillsent.jsx';
import Photo from './compns/photo.jsx';

import HomeFooter from './compns/homefooter.jsx';
import CapsuleFooter from './compns/capsulefooter.jsx';
import UserFooter from './compns/userfooter.jsx';

function App() {

  return (
    <>
    <div className="overflow-hidden">
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<><Home/><HomeFooter/></>} />
        <Route path="/capsule" element={<><Capsule/><CapsuleFooter/></>}/>
        <Route path="/user" element={<><User/><UserFooter/></>}/>
        <Route path="/fluox" element={<><Fluox/><CapsuleFooter/></>}/>
        <Route path="/healthcard" element={<><Healthcard/><HomeFooter/></>}/>
        <Route path="/refillsent" element={<><RefillSent/><HomeFooter/></>}/>
        <Route path="/photo" element={<><Photo/><HomeFooter/></>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;