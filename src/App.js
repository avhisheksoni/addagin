import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './navbar';
import Slider from './slider';
import Footer from './footer';
import About from './pages/about';
import Service from './pages/Service';
import Product from './pages/product';
import Contact from './pages/contact';
import {BrowserRouter , Route, Switch ,Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />  
      <Switch>
     <Route exact path="/"        component={Slider} />
     <Route exact path="/about" component={About} />
     <Route exact path="/Service" component={Service} />
     <Route exact path="/product" component={Product}  />
     <Route exact path="/contact" component={Contact} />
     </Switch>
     <Footer />  
    
    </>

    );
}

export default App;
