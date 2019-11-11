import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Wyr from './Wyr'
import Navigation from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { users } from './_DATA'

class App extends React.Component {
    render() {
        return (
            <Router>
                <header>
                    <Navigation></Navigation>
                </header>
                <Wyr></Wyr>
            </Router>
        )
    }
}

export default App
