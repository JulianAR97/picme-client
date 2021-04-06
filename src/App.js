import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Play from './components/Play.js';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


class App extends Component {
  
  
  render() {
    
    return (
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={ About } />
            <Route exact path="/play" component={ Play } />
            <Route component={ErrorPage} />
        </Switch>
        <Footer />

      </Router>
    );

  }
}

export default App;
