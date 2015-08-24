import React from 'react';
import Router, {Route} from 'react-router';

import App  from './App.jsx'
import Home from './Home.jsx';
import Page from './Page.jsx';

var routes = (
  <Route handler={App}>
    <Route path="home" handler={Home} />
    <Route path="page" handler={Page} />
  </Route>
)

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.body);
});

// React.render(<App />, document.body);
