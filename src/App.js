import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {motion} from 'framer-motion';
import Home from './components/Home/Home';
import { Students } from './components/Students/Students';
import VideoCalls from './components/VideoCalls/VideoCalls';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

function App() {
  return (
    <div>
      <Router>
        {/*<Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/chat' element={<VideoCalls />} />
        </Routes>
        <Footer />
      </Router>
    </div> 
  );
}

export default App;
