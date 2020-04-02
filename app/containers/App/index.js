/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { hot } from 'react-hot-loader/root';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Header and Footer

import { Header } from '../../components/Header/Header';
import { Board } from '../Board/index';
import { AddBoard } from '../AddBoard/index';
import { HomePage } from '../HomePage/Homepage';

import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/createboard" component={AddBoard} />
        <Route path="/board/:name" component={Board} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
