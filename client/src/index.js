import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cours from './pages/Cours'
import Confection from './pages/Confection'
import Propos from './pages/Propos'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";



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
                <Route path="/connexion">
                    <Connexion />
                </Route>
                <Route path="/inscription">
                    <Inscription />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)