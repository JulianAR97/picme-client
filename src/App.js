import React, {Component} from 'react';
import Loading from './components/Loading'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getPics } from './actions/picActions';
import PicCollection from './containers/PicCollection'
import About from './components/About';
import Play from './components/Play'
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@material-ui/core/styles'
import mainTheme from './styles/theming'


class App extends Component {

  componentDidMount() {
    this.props.getPics()
  }

  render() {
    if (this.props.picsLoading) {
      return <Loading />
    }


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
          <Footer />

        </Router>
      </ThemeProvider>
    );
    


  }
}

const mapStateToProps = state =>  ({
  loading: state.loading,
})


export default connect(mapStateToProps, {getPics})(App);
