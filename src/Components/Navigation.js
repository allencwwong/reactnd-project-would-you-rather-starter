import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light">
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/new-question">New Question</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation
