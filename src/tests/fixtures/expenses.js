import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gum',
        amount: 123,
        createdAt: 0,
        note: ''
    }, {
        id: '2',
        description: 'Rent',
        amount: 123000,
        createdAt: moment(0).subtract(4, 'day').valueOf(),
        note: ''
    }, {
        id: '3',
        description: 'Credit Card',
        amount: 234,
        createdAt: moment(0).add(4, 'day').valueOf(),
        note: ''
    }
];