import React from 'react'
import '../styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route path="/confection" element={<Confection />}/>
                    <Route path="/cours" element={<Cours />}/>
                    <Route path="/propos" element={<Propos />}/>
                    <Route path="/connexion" element={<Connexion />}/>
                    <Route path="/inscription" element={<Inscription />}/>
                    <Route path="/admin" element={<Admin />}/>
                    <Route path="/*" element={<Error />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App