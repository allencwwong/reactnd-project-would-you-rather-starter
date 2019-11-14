import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { setAuthUser } from '../actions/authUser';

class Navigation extends React.Component {
    handleClickLogout = () => {
        console.log('logging out');
        this.props.setAuthUser(null);
        document.location.href = '/';
    };

    render() {
        console.log(this.props.authUser);
        return (
            <Navbar bg="light">
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/new-question">New Question</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <span>{this.props.authUser}</span>
                    <Button onClick={() => this.handleClickLogout()}>
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(null, { setAuthUser })(Navigation);
