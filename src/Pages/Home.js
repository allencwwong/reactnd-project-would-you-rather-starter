import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import QuestionCard from './../Components/QuestionCard';
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
        const { authUser } = this.props;
        let questionId = e.currentTarget.getAttribute('data-id');
        console.log(authUser, questionId, this.state.value);
        if (this.state.value !== '') {
            this.props.dispatch(
                handleSaveQuestionAnswer(
                    authUser,
                    questionId,
                    this.state.value,
                ),
            );
        }
    };

    render() {
        const { userQuestions, questions, users, authUser } = this.props;
        let handleClickRadio = this.handleClickRadio,
            handleSubmit = this.handleSubmit;

        return (
            <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="Unanswered" title="Unanswered">
                    <QuestionCard
                        questionsByType={userQuestions.unanswered}
                        questionType="unanswered"
                        questions={questions}
                        handleSubmit={handleSubmit}
                        handleClickRadio={handleClickRadio}
                        users={users}
                        authUser={authUser}
                    />
                </Tab>
                <Tab eventKey="Answer" title="Answer">
                    <QuestionCard
                        questionsByType={userQuestions.answered}
                        questionType="answered"
                        questions={questions}
                        users={users}
                        authUser={authUser}
                    />
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
