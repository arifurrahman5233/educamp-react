import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Courses from './Components/Courses/Courses';
import Fetures from './Components/Fetures/Fetures';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Courses></Courses>
      <Fetures></Fetures>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
