
import React, { Component } from 'react'
import Navbar from './components/Layouts/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'
import News from './components/Pages/News'


import './App.css'
import SauceMapping from './components/Pages/SauceMapping'
import DataDMapping from './components/Pages/DataDMapping'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer'




 class App extends Component {
  render() {
    return (
      <div className='container'>
      <Navbar />
      <Switch>
      <Route path= "/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News}/>
      <Route path="/saucemapping" component={SauceMapping}/>
      <Route path="/datadmapping" component={DataDMapping}/>
      
      </Switch>
     
      <Footer />
      </div>
    )
  }
}
export default App