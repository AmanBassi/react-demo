import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './resources/App.css';
// import HelloWorld from './components/HelloWorld';
// import Home from './components/Home';
// import ContactUs from './components/ContactUs';
// import Garage from './components/Garage';
// import Parent from './components/3-props/Parent';
// import Container from 'react-bootstrap/Container';
// import Counter from './components/4-state/Counter';
// import UpdateCounter from './components/4-state/UpdateCounter';
//import Manager from './components/5-form/Manager';
//import Manager from './components/6-lifting/Manager';
// import BasketManager from './components/7-basket/BasketManager';
import Nav from './components/8-routing/Nav';
import Footer from './components/8-routing/Footer';
import Home from './components/8-routing/pageComponents/Home';
import AboutUs from './components/8-routing/pageComponents/AboutUs';
import ContactUS from './components/8-routing/pageComponents/ContactUs';
import Product from './components/8-routing/pageComponents/Product';
import Clock from './components/9-hooks/Clock';
import HelloWorld from './components/9-hooks/HelloWorld';
import Bar from './components/10-datarequests/Bar';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUS />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/helloworld">
          <HelloWorld />
        </Route>
        <Route path="/bar">
          <Bar />
        </Route>
      </Switch>
      <Footer />
    </Router>
    //      <HelloWorld />
    //       <Home />
    //       <ContactUs />
    //       <Garage />
    //     <Parent /> 
    //       <Manager />
    //       <Manager /> 
    // <Container>
    //       <BasketManager />
    //     </Container>
  );
}

export default App;
