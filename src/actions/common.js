import { getInitData } from '../utils/api';
import { fetchQuestions } from '../actions/questions';
import { fetchUsers } from '../actions/users';

export function handleInitData() {
    return (dispatch) => {
        return getInitData().then(({ users, questions }) => {
            dispatch(fetchQuestions(questions));
            dispatch(fetchUsers(users));
        });
    };
}
