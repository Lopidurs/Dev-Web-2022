import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cours from './pages/Cours'
import Confection from './pages/Confection'
import Propos from './pages/Propos'
import Header from './components/Header'
import Error from './components/Error'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/confection">
                    <Confection />
                </Route>
                <Route path="/cours">
                    <Cours />
                </Route>
                <Route path="/propos">
                    <Propos />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)