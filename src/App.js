import logo from './logo.svg';
import React, {Component} from 'react';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

class App extends Component {
  
  state = {
    imgUrl: ''
  }

  componentDidMount(){
    fetch('https://picsum.photos/200').then(resp => this.setState({imgUrl: resp.url}))
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <img src={this.state.imgUrl}></img>
        <Footer />
      </div>
    );

  }
}

export default App;
