import moment from 'moment';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test ('test setStartDate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test ('test setEndDate', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test ('test set text filter', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test ('test set text filter with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test ('test sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test ('test set text filter with default value', () => {
    
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});