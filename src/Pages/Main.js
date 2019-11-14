import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';

class Main extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={() => <Home />} />
                <Route path="/new-question" component={() => <NewQuestion />} />
                <Route path="/leaderboard" component={() => <LeaderBoard />} />
            </div>
        );
    }
}

export default withRouter(Main);
