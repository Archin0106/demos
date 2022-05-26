import Header from './Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Users from './Users/Users';
import Profile from './Profile/Profile';
import AddContact from './AddContact/AddContact';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/addcontact" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;