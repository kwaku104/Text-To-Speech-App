import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Voice from './Components/VoiceComponent';
import NavBar from './Components/NavBarComponent';
import Post from './Components/PostComponent';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Voice></Voice>
          {/* <Text></Text> */}
          <Post></Post>
        </div>
      </Router>
    );
  }

}

export default App;