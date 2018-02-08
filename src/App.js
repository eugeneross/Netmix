
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import store from './store';

import Home from './views/home';
import Login from './views/login'
import Register from './views/register';
import Movies from './views/movies';

const history = createHistory();

if (!window) {
  window = global;
}

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register} />
          <Route exact path='/movies' component={Movies} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
