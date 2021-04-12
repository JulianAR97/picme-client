import React, {Component} from 'react';
import Loading from './components/Loading'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getPics, setCookie, getMyCollection } from './actions/picActions';
import PicCollection from './containers/PicCollection'
import About from './components/About';
import Play from './components/Play'
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@material-ui/core/styles'
import mainTheme from './styles/theming'
import {createCookie} from './helpers/appHelpers'


class App extends Component {

  componentDidMount() {
    this.props.getPics()
    // We create a cookie id so that we can remember users and they can save pics without
    // logging in.  Similar to a shopping cart. 
    // cookie is in form "userUUID=random_id"
    const userUUID = createCookie().split('=')[1] // we just want the random id
    this.props.setCookie(userUUID)


  }

  render() {
    // if (this.props.loading) {
    //   // return <Loading />
    // } else {
      return (
        <ThemeProvider theme={mainTheme}>
  
          
       
  
            <Router>
              <NavBar />
              <Switch>
                  <Route exact path="/" component={ About } />
                  <Route exact path="/play" component={ Play } />
                  <Route exact path="/hottest" component={ PicCollection } />
                  <Route component={ErrorPage} />
              </Switch>
            </Router>
       
            <Footer />
          
        </ThemeProvider>
      );
      
    }


    


  
}

const mapStateToProps = state =>  ({
  loading: state.loading,
})


export default connect(mapStateToProps, {getPics, setCookie, getMyCollection})(App);
