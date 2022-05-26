import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";
import Dashboard from "./Dashboard/Dashboard";
import Product from "./Product/Product";
import Profile from "./Profile/Profile";
function App() {
  const achievements = [
    {
      title: "Education",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      title: "Awards",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      title: "Skills",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      title: "Experience",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
  ];
  return (
    <div>
      <Header />
      <Profile/>
      {/* <Product/> */}
      {/* <Dashboard/> */}
      {/* {
        achievements.map(item => <Card title={item.title} description={item.description} />)
      } */}
      <Footer />
    </div>
  );
}

export default App;