import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Shopping from './Pages/Shopping';
import './style.css';

function App(){
  
  return (
    <div className="App">
    <Router>
    
       <Navbar/>
       <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/Shopping" component={Shopping}/>
            

             </Switch>
          
          
     
    
    </Router>
    </div>
  );
  }


export default App;
