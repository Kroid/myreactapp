import React, {Component} from 'react';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

export default class App extends Component {
  render() {

    return (
      <div locales={['en-US']}>
        <h2>App</h2>
        <div>
          <a href='/home'>home</a> <a href='/page'>page</a>
        </div>
        <RouteHandler></RouteHandler>
      </div>
    )
  }
}
