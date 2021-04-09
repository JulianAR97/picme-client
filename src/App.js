import React, {Component} from 'react';
import Loading from './components/Loading'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getPics } from './actions/picActions';
import About from './components/About';
import Play from './components/Play.js';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@material-ui/core/styles'
import mainTheme from './styles/theming'


class App extends Component {
  const
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
              <Route component={ErrorPage} />
          </Switch>
          <Footer />

        </Router>
      </ThemeProvider>
    );

  }
}


export default connect(state => ({ loading: state.loading }), {getPics})(App);
