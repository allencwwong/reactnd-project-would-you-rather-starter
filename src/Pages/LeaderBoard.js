import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions/users';
import { fetchQuestions } from './../actions/questions';

class LeaderBoard extends React.Component {
    render() {
        const { users } = this.props;
        console.log(users);
        return <div>LeaderBoard Page</div>;
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps, { fetchUsers, fetchQuestions })(
    LeaderBoard,
);
