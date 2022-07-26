import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'

import { BooksIndex } from './components/Books/BooksIndex';
import { BooksCreate } from './components/Books/BooksCreate';
import { BooksEdit } from './components/Books/BooksEdit';
import { BooksDelete } from './components/Books/BooksDelete';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path={['/Books', '/Books/Index']} component={BooksIndex} exact />
                <Route path='/Books/Create' component={BooksCreate} exact={true} />
                <Route path='/Books/Edit/:id' component={BooksEdit} exact />
                <Route path='/Books/Delete/:id' component={BooksDelete} exact />
            </Layout>
        );
    }
}
