import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from './Pages/Home'
import NewQuestion from './Pages/NewQuestion'
import LeaderBoard from './Pages/LeaderBoard'
import './Wyr.css'

class Wyr extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={props => <Home />} />
                <Route path="/new-question" component={() => <NewQuestion />} />
                <Route path="/leaderboard" component={() => <LeaderBoard />} />
            </div>
        )
    }
}

export default withRouter(Wyr)
