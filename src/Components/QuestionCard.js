import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class QuestionCard extends React.Component {
    render() {
        const {
            questionsByType,
            questionType,
            questions,
            handleSubmit,
            handleClickRadio,
            users,
            authUser,
        } = this.props;

        console.log(this.props);

        return questionsByType.map((question) => (
            <Row key={questions[question].id}>
                <Col>
                    <Card>
                        <Card.Header>{`${
                            users[questions[question].author].name
                        } Asks:`}</Card.Header>
                        <Card.Body>
                            <Card.Title>Would You Rather?</Card.Title>
                            {questionType === 'answered' && (
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <img
                                                    src={
                                                        users[authUser]
                                                            .avatarURL ||
                                                        'https://dummyimage.com/80x80/000/fff'
                                                    }
                                                    alt="avatar"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <Card.Text>
                                                    Option1:
                                                    {
                                                        questions[question][
                                                            'optionOne'
                                                        ].text
                                                    }
                                                </Card.Text>
                                            </Col>
                                            <Col md={6}>
                                                <Card.Text>
                                                    Option2:
                                                    {
                                                        questions[question][
                                                            'optionTwo'
                                                        ].text
                                                    }
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                            <Link
                                                to={`/questions/${questions[question].id}`}>
                                                View Detail
                                            </Link>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            )}
                            {questionType === 'unanswered' && (
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
                                                    value="optionOne"
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
                                                    value="optionTwo"
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
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        ));
    }
}

export default QuestionCard;
