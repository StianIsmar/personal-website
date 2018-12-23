import React, { Component } from 'react'
import Frontpage from './components/frontpage.js'
import store from './store/index'
import './app.css';



class App extends Component {
  render() {
    return (
      <div>
        <div style={{margin:0}}>
          <Frontpage store= {store} />
        </div>
      </div>
    );
  }
}
export default App;
