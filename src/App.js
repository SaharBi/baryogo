import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Gallerya from './components/Gallery';
import OurCustomers from './components/OurCustomers';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
              <Route path='/home' component={Menu} />
              <Route path='/contactus' component={Contactus} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/ourservices' component={OurServices} />
              <Route path='/gallery' component={Gallerya} />
              <Route path='/ourcustomers' component={OurCustomers} />
              <Redirect to="/home" />
          </Switch>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
