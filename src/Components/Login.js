import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions/users';
import LoginUsers from './LoginUsers';

class Login extends React.Component {
    render() {
        const { users } = this.props;
        console.log(users);
        if (users) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Select a user</Card.Title>
                                    <LoginUsers users={users} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(Login);
