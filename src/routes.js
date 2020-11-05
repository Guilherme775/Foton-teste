import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Books from './pages/Books';
import Book from './pages/Book';

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/book" component={Book} />
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;