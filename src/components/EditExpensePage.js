import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div> 
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={ this.onSubmit }
                />
                <button onClick={ this.onClick }>Remove</button>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => {
            dispatch(startEditExpense(id, expense));
        },
        startRemoveExpense: (data) => {
            dispatch(startRemoveExpense(data));
        }
    }
}
const mapStateToProps = (state, props) => {
    return { 
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(EditExpensePage);