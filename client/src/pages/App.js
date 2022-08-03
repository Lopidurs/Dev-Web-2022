import React from 'react'
import '../styles/index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Cours from './Cours'
import Confection from './Confection'
import Propos from './Propos'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../components/Error'
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Admin from "./Admin";

function App(){
    return(
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
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default App