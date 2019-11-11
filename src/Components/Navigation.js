import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light">
                <Nav>
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/new-question">New Question</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation
