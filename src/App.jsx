import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Admission from './pages/Admission';
import Academics from './pages/Academics';
import Organization from './pages/Organization';
import CampusLife from './pages/CampusLife';
import NoticeBoard from './pages/NoticeBoard';
import Contact from './pages/Contact';
import './App.css';

// Placeholder Pages
// const Home = () => <div className="container section"><h1>Home Page</h1></div>;
// const About = () => <div className="container section"><h1>About Us</h1></div>;
// const Admission = () => <div className="container section"><h1>Admission</h1></div>;
// const Academics = () => <div className="container section"><h1>Academics</h1></div>;
// const Organization = () => <div className="container section"><h1>Organization</h1></div>;
// const CampusLife = () => <div className="container section"><h1>Campus Life</h1></div>;
// const NoticeBoard = () => <div className="container section"><h1>Notice Board</h1></div>;
// const Contact = () => <div className="container section"><h1>Contact Us</h1></div>;

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
