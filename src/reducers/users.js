import { FETCH_USERS } from '../actions/types'

const initialState = {}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_USERS:
            console.log('reducer')
            return actions.payload
        default:
            return state
    }
}
