import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { setAuthUser } from '../actions/authUser';

class Navigation extends React.Component {
    handleClickLogout = () => {
        console.log('logging out');
        this.props.setAuthUser(null);
    };

    render() {
        console.log(this.props);
        return (
            <Navbar bg="light">
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/add">New Question</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <span>{this.props.authUser}</span>
                    <Link onClick={() => this.handleClickLogout()}>Logout</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(null, { setAuthUser })(Navigation);
