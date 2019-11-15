import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions/users';
import { Container, Row, Col, Card } from 'react-bootstrap';

class LeaderBoard extends React.Component {
    render() {
        function leaderboardList(leaderboard) {
            return leaderboard.map((user) => (
                <Row key={user.id}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {user.name}
                                    <img
                                        src={
                                            user.avatarURL ||
                                            'https://dummyimage.com/80x80/000/fff'
                                        }
                                        alt="avatar"
                                    />
                                </Card.Title>
                                <Row>
                                    <Col md={3}>
                                        <Card.Text>
                                            Question Amount: {user.questionAmt}
                                        </Card.Text>
                                    </Col>
                                    <Col md={3}>
                                        <Card.Text>
                                            Answer Amount: {user.answerAmt}
                                        </Card.Text>
                                    </Col>
                                    <Col md={3}>
                                        <Card.Text>
                                            Total: {user.total}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ));
        }

        const { users, leaderboard } = this.props;

        console.log(users);
        console.log(leaderboard);
        if (leaderboard) {
            return <Container>{leaderboardList(leaderboard)}</Container>;
        } else {
            return <div>Loading...</div>;
        }
    }
}

function mapStateToProps(state) {
    console.log(state.users);
    const leaderboard = Object.keys(state.users)
        .map((user) => ({
            id: state.users[user].id,
            name: state.users[user].name,
            avatarURL: state.users[user].avatarURL,
            answerAmt: Object.keys(state.users[user].answers).length,
            questionAmt: state.users[user].questions.length,
            total:
                Object.keys(state.users[user].answers).length +
                state.users[user].questions.length,
        }))
        .sort((a, b) => b.total - a.total);
    return {
        leaderboard,
    };
}

export default connect(mapStateToProps, { fetchUsers })(LeaderBoard);
