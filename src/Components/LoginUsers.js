import React from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';

class LoginUsers extends React.Component {
    handleClickSetAuthUser = (id) => {
        this.props.setAuthUser(id);
    };
    render() {
        const { users } = this.props;

        return (
            <div>
                {Object.keys(users).map((user, idx) => {
                    return (
                        <div
                            onClick={() =>
                                this.handleClickSetAuthUser(users[user].id)
                            }
                            key={idx}>
                            {users[user].id}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default connect(null, { setAuthUser })(LoginUsers);
