import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Pages/Main';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { handleInitData } from './actions/common';
import Login from './Components/Login';

class App extends React.Component {
    componentDidMount() {
        this.props.handleInitData();
    }

    componentDidUpdate() {
        this.props.handleInitData();
    }

    render() {
        const { authUser } = this.props;
        console.log(this.props);
        return (
            <Router>
                {authUser ? (
                    <div>
                        <header>
                            <Navigation
                                authUser={this.props.authUser}
                                {...this.props}></Navigation>
                        </header>
                        <Main />
                    </div>
                ) : (
                    <Login></Login>
                )}
            </Router>
        );
    }
}

function mapStateToProps({ authUser }) {
    return {
        authUser,
    };
}

export default connect(mapStateToProps, { handleInitData })(App);
