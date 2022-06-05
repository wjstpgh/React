import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Contact } from './components/Contact';
import { Info } from './components/info';
import Fragment from './components/componentDetail/Fragment';

import './custom.css'
import {State} from './components/componentDetail/State';


export default class App extends Component {
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/info' component={Info} />
        <Route path='/contact' component={Contact} />
        <Route path='/hidden' component={Fragment} />
        <Route path='/state' component={State} />
      </Layout>
    );
  }
}
