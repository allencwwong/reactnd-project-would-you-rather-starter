import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Wyr from "./Wyr";

class App extends React.Component{
  render(){
    return(
      <Router>
          <Wyr></Wyr>
      </Router>
    )
  }
}

export default App;
