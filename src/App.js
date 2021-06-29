import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
// import OurServices from './components/OurServices';
import Gallerya from './components/Gallery';
import ViewCategoryDetails from './components/ViewCategoryDetails';
import ViewCategoryImages from './components/ViewCategoryImages';
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
              {/* <Route path='/ourservices' component={OurServices} /> */}
              <Route path='/gallery' component={Gallerya} />
              <Route path='/ourcustomers' component={OurCustomers} />
              <Route exact path="/view-category-details/:id" component={ViewCategoryDetails} />
              <Route exact path="/view-category-images/:title" component={ViewCategoryImages} />
              <Redirect to="/home" />
          </Switch>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
