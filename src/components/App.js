import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './Counter.js';
import Nav from './Nav.js';
import Home from './Home.js';

const App = () => (

        <div id="app-component">

            <BrowserRouter>

                <div id="router-div">

                    <Nav />

                    <Route
                        exact path='/'
                        component={ Home }
                    />
                    <Route
                        exact path='/count'
                        component={ Counter }
                    />
                </div>
            </BrowserRouter>

        </div>
    );

export default App;
