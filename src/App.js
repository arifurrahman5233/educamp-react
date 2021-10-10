
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Courses from './Components/Courses/Courses';
import Fetures from './Components/Fetures/Fetures';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
import Allitem from './Components/Allitems/Allitem';
import { BrowserRouter ,Switch,Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path ="/home">
          <Allitem></Allitem>
        </Route>
        <Route exact path ="/courses">
            <Courses></Courses>
        </Route>

        <Route exact path ="/features">
            <Fetures></Fetures>
          </Route>
          <Route exact path ='/contact'>
            <Contact></Contact>
          </Route>
        <Route exact path ="/Allitem">
            <Allitem></Allitem>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
