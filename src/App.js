import logo from './logo.svg';
import About from './Components/About'
import Header from './Components/Header';
import Education from './Components/Education';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Education" component={Education}/>
     
      <Route path="/Contact" component={Contact}/>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
