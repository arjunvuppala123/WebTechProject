import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import Nav from './components/nav-comp'
//import Home from './components/home';
import { NavigationBar } from './components/NavigationBar';
import { Mainpage } from './components/mainpage';
import { Review } from './components/review'
import { Billboard } from './components/billboard';
import  Login  from './components/login';
import  Register  from './components/register';
import { Explore } from './components/explore';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavigationBar />
             <Switch>
                <Route exact path="/" component={Mainpage} />
                <Route exact path="/billboard" component={Billboard} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path = "/register" component ={Register}/>
                <Route exact path = "/login" component ={Login}/>
             </Switch>
            
    </div>
    </BrowserRouter>

  );
}

export default App;
/*
<div classbane ='auth-wrapper'>
<div className = "auth-inner">
</div>
</div>*/