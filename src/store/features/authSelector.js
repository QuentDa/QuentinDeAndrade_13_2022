export function getUsername(state) {
    return state.AUTH.username;
}

export function getToken(state) {
    return state.AUTH.token;
}

export function getUser(state) {
    const firstName = state.AUTH.user.firstName;
    const lastName = state.AUTH.user.lastName;
    return { firstName, lastName };
}