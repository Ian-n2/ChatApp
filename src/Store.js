import React from 'react';

export const CTX = React.createContext();

const initState = {
    general: [
        {from: 'Ian', msg: 'hi'}
    ],
    topic2: [
        {from: 'Ian', msg: 'alright'}
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    { from, msg }
                ]
            }
        default:
            return state

    }
}

export default function Store() {

    const reducerHook = React.useReducer(reducer, initState)

    return (
        <CTX.Provider value={reducerHook}>
            (props.childrn)
        </CTX.Provider>
    )
}