import { FETCH_QUESTIONS, ADD_ANSWER_TO_QUESTION, ADD_QUESTION } from './types';
import { saveQuestion } from '../utils/api';
import { addQuestionToUser } from '../actions/users';

export function fetchQuestions(questions) {
    return {
        type: FETCH_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function addAnswerToQuestion(authUser, qid, answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authUser,
        qid,
        answer,
    };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            (question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionToUser(question));
            },
        );
    };
}
