import logo from './logo.svg';
import React, {Component} from 'react';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import completeState from './helpers/completeState'

class App extends Component {
  
  state = {
    imgUrl: '',
    id: '',
    author: ''
  }

  componentDidMount(){
    // 200 specifies that the picture will be a square 200x200px
    fetch('https://picsum.photos/200')
      .then(resp => {
        this.setState({imgUrl: resp.url})
        return resp.url })
      .then(url => {
        // url will be in form "https://i.picsum.photos/id/73/200/200.jpg?hmac=IYjgRq-Ok9gn3_MVxJ4TlfhLPONQ97qWvp2Ir1Y1z6c"
        let id = url.split('/')[4];
        this.setState({id});
        fetch(`https://picsum.photos/id/${id}/info`)
          .then(resp => resp.json())
          .then(json => this.setState({author: json.author}))
      })
  }
  
  render() {
    if (!completeState(this.state)) {
      return (
        // Replace with loading wheel
        <p>loading...</p>
      )
    }
    
    return (
      <div className="App">
        <NavBar />
        <img src={this.state.imgUrl} alt="random"></img>
        <Footer />
      </div>
    );

  }
}

export default App;
