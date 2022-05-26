import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import ContactList from "./ContactList/ContactList";
import AddContact from "./AddContact/AddContact";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/addcontact" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
