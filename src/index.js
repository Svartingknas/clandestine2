import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import index from './index.css'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Events from './Events'
import Past from './Past'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/about" component={About} >
        <Route path="/about/:userName/:repoName" component={Contact}/>
      </Route>
      <Route path="/events" component={Events} >
        <Route path="/events/:userName/:repoName" component={Past} />
      </Route>
    </Route>
</Router>,
  document.getElementById('root')
);
