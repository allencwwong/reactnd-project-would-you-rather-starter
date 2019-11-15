import { FETCH_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from './types';
import { saveQuestionAnswer } from '../utils/api';
import { addAnswerToQuestion } from '../actions/questions';

export function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        users,
    };
}

export function addQuestionToUser({ id, author }) {
    return {
        type: ADD_QUESTION_TO_USER,
        id,
        author,
    };
}

function addAnswerToUser(authUser, qid, answer) {
    console.log('hmmm');
    return {
        type: ADD_ANSWER_TO_USER,
        authUser,
        qid,
        answer,
    };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {
    return (dispatch) => {
        dispatch(addAnswerToUser(authUser, qid, answer));
        dispatch(addAnswerToQuestion(authUser, qid, answer));

        return saveQuestionAnswer(authUser, qid, answer);
    };
}
