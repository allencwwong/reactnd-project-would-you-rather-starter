import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { handleSaveQuestionAnswer } from '../actions/users';

class Home extends React.Component {
    state = {
        value: '',
    };

    handleClickRadio = (e) => {
        console.log(e);
        this.setState({ value: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { authUser, handleSaveQuestionAnswer } = this.props;
        alert('submit');
        let questionId = e.currentTarget.getAttribute('data-id');
        // console.log(authUser, questionId, this.state.value);
        if (this.state.value !== '') {
            handleSaveQuestionAnswer(authUser, questionId, this.state.value);
        }
    };

    render() {
        console.log(this.state);
        const { userQuestions, questions, users } = this.props;
        console.log(userQuestions);
        let handleClickRadio = this.handleClickRadio,
            handleSubmit = this.handleSubmit;

        function unansweredList(unansweredQuestions) {
            return unansweredQuestions.map((question) => (
                <Row key={questions[question].id}>
                    <Col>
                        <Card>
                            <Card.Header>{`${
                                users[questions[question].author].name
                            } Asks:`}</Card.Header>
                            <Card.Body>
                                <Card.Title>Would You Rather?</Card.Title>

                                <Form
                                    onSubmit={(e) => handleSubmit(e)}
                                    data-id={question}>
                                    <fieldset>
                                        <Form.Group as={Row}>
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label={
                                                        questions[question][
                                                            'optionOne'
                                                        ].text
                                                    }
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    value={
                                                        questions[question][
                                                            'optionOne'
                                                        ].text
                                                    }
                                                    onClick={(e) =>
                                                        handleClickRadio(e)
                                                    }
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label={
                                                        questions[question][
                                                            'optionTwo'
                                                        ].text
                                                    }
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
                                                    value={
                                                        questions[question][
                                                            'optionTwo'
                                                        ].text
                                                    }
                                                    onClick={(e) =>
                                                        handleClickRadio(e)
                                                    }
                                                />
                                            </Col>
                                        </Form.Group>
                                    </fieldset>

                                    <Form.Group as={Row}>
                                        <Col>
                                            <Button type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ));
        }

        return (
            <Tabs defaultActiveKey="Unanswer" id="uncontrolled-tab-example">
                <Tab eventKey="Unanswer" title="Unanswer">
                    {unansweredList(userQuestions.unanswered)}
                </Tab>
                <Tab eventKey="Answer" title="Answer">
                    <p>Ans</p>
                </Tab>
            </Tabs>
        );
    }
}

function mapStateToProps(state) {
    const answeredIds = Object.keys(state.users[state.authUser].answers);

    const unanswered = Object.keys(state.questions)
        .filter(
            (question) => !answeredIds.includes(state.questions[question].id),
        )
        .sort((a, b) => b.timestamp - a.timestamp);

    const answered = Object.keys(state.questions)
        .filter((question) =>
            answeredIds.includes(state.questions[question].id),
        )
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        authUser: state.authUser,
        users: state.users,
        questions: state.questions,
        userQuestions: {
            answered,
            unanswered,
        },
    };
}

export default connect(mapStateToProps)(Home);
