import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount: 10990,
        createdAt: 1000,
        note: 'This was the note.'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('test add expense with default value', () => {
    const action = addExpense();
    const expectedExpense = {
        id: expect.any(String),
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expectedExpense
    });
});
