import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Wyr from './Wyr'
import Navigation from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { fetchUsers } from './actions/users'

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        console.log(this.props.users)
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

const mapStateToProps = state => ({
    users: state.users
})

export default connect(
    mapStateToProps,
    { fetchUsers }
)(App)
