import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import App from './components/App';
import ChismeDescription from './components/ChismeDescription';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/:number' component={ChismeDescription}/>
        </Switch>
     </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();