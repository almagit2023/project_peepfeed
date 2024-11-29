import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import CheckPeeP from './pages/checkpeep/CheckPeep'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Stories from './pages/stories/Stories';
import WhatsNew from './pages/whatsnew/WhatsNew';
import Contact from './pages/contact/Contact';
import Login from './pages/login/LogIn';
import Registration from './pages/registration/Registration';


function App() {
  return (
    <div className="appDiv">
      <Header/>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path="/checkpeep">
            <CheckPeeP/>
          </Route>
          <Route path="/stories">
            <Stories/>
          </Route>
          <Route path="/whatsnew">
            <WhatsNew/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
        </Switch>
      </Router>
     <Footer/> 
    </div>
  );
}

export default App;
