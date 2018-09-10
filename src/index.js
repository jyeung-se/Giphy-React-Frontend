import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'


import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        {/* <Route path="/signup" component={App} />   */}
        {/* <Route path="/favorites" component={List} /> */}
        <App />
      </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();

// ///// original default code from 'create-react-app'
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
