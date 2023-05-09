export default function userReducer(state, action) {
    
    switch(action.type) {
        case 'login':
            return {...state, user: { name: action.payload }}
        case 'resetLogin':
            return {...state, user: { name: 'user' }}
        default: 
            return state
    }
}