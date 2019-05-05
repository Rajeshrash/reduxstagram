import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import App from './components/App';

import { Provider } from 'react-redux'

import store, {history} from './store'

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Provider store ={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
  
)

render(router, document.getElementById('root'));