import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
test("test remove expense", () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test("test edit expense", () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});

test('test add expense', () => {
    const expense = expenses[2];
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});
test('add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshoot) => {
        expect(snapshoot.val()).toEqual(expenseData);
        done();
    });
});

test('add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note:'',
        createdAt: 0
    }
    store.dispatch(startAddExpense(expenseDefaults)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshoot) => {
        expect(snapshoot.val()).toEqual(expenseDefaults);
        done();
    });
});
// test('test add expense with default value', () => {
//     const action = addExpense();
//     const expectedExpense = {
//         id: expect.any(String),
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: ''
//     }
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: expectedExpense
//     });
// });
