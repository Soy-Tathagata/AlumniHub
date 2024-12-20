import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HeroSection/HeroPage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import Faq from './components/AboutUs/Faq.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Donation from './components/Donation/Donation.jsx';
import NotificationList from './components/Notification/NotificationList.jsx'; 
import AlumniPage from './components/Alumni/AlumniPage.jsx'; // Import AlumniPage
import Events from './components/Events/Events.jsx';
import Reunion from './components/Events/reunion.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Provider store={store}>
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/faqs" element={<Faq />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/alumni" element={<AlumniPage />} /> {/* Alumni Page route */}
          <Route path="/events" element={<Events />} /> 
          <Route path="/events/reunion" element={<Reunion />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
