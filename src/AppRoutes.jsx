import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/About'

const AppRoutes = () => {
    return (
        <div>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        </div>

    )
}

export default AppRoutes