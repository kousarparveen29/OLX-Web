import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./components/Home";
import Sell from "./components/Sell"
import Form from "./components/Form"

class App extends React.Component{
  render(){
    return(
      <>
      < Home />
      < Sell />
      < Form />
      </>
    )
  }
}

export default App;
