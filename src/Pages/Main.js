import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionDetails from './QuestionDetails';
import LeaderBoard from './LeaderBoard';

class Main extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route
                        path="/questions/:question_id"
                        component={() => <QuestionDetails />}
                    />
                    <Route path="/add" component={() => <NewQuestion />} />
                    <Route
                        path="/leaderboard"
                        component={() => <LeaderBoard />}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);
