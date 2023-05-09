export function login(dispatch, name) {
    dispatch({type: 'login', payload: name})
}

export function resetLogin(dispatch, name) {
    dispatch({type: 'resetLogin', name})
}