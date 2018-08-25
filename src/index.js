import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import SongsIndex from './components/Songs/songs_index';
import SongsNew from './components/Songs/songs_entry';
import SongsShow from './components/Songs/songs_show';
import App from './components/app';
import Welcome from './components/Welcome';
import Signup from './components/User Authentication/Signup';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>

            <App>
                <Switch>
                <Route path="/songs/entry" component={SongsNew}/>
                <Route path="/songs/:id" component={SongsShow}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/" component={Welcome}/>
                </Switch>
            </App>

        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
