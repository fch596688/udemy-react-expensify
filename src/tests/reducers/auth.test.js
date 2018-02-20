import authReducer from '../../reducers/auth';

test('set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'avg23r4'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('clear uid for login', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});