import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA';

let test = (users, questions) => {
    console.log('test');
    return ([users, questions]) => ({
        users,
        questions,
    });
};

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
        // ([users, questions]) => ({
        //     users,
        //     questions,
        // }),
        test([_getUsers(), _getQuestions()]),
    );
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(authUser, qid, answer) {
    console.log('info', { authUser, qid, answer });
    return _saveQuestionAnswer({ authUser, qid, answer });
}
