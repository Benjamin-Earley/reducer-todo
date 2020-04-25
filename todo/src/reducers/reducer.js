import React from 'react';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    },
    {
        item: 'Practice with reducers',
        completed: false,
        id: Date.now()
    },
    {
        item: 'Master reducers',
        completed: false,
        id: Date.now()
    },
    {
        item: 'On to the next!',
        completed: false,
        id: Date.now()
    }
];

const reducer = (state, action) => {
    switch(action.type) {
        case'ADD_TODO':
           return [...initialState, action.payload];
        default:
            return state;
    };
};

export default reducer(initialState, { type: 'ADD_TODO'});
