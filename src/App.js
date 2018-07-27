import React, { Component } from 'react';
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import store from './store/store';
import {Provider} from 'react-redux';

import Home from './components/home/home';
import Find from './components/find/find';
import Order from './components/order/order';
import My from './components/my/my';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={()=>{
                return <Redirect to="/home"/>
              }}></Route>

              <Route path="/home" render={(history)=>{
                return <Home history={history}/>
              }}></Route>
              <Route path="/find" render={(history)=>{
                return <Find history={history}/>
              }}></Route>
              <Route path="/order" render={(history)=>{
                return <Order history={history}/>
              }}></Route>
              <Route path="/my" render={(history)=>{
                return <My history={history}/>
              }}></Route>

            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
