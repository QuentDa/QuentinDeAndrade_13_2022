export function getUsername(state) {
    return state.AUTH.username;
}

export function getToken(state) {
    return state.AUTH.token;
}

export function getUser(state) {
    const selectFirstName = state.AUTH.user.firstName;
    const selectLastName = state.AUTH.user.lastName;
    return { selectFirstName, selectLastName };
}