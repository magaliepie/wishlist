import types from './types';

let wishes = [
    {
        id: 1,
        name: 'go for a walk',
    },
    {
        id: 2,
        name: 'buy a coffee',
    },
];

export let wishesReducer = (state = wishes, action) => {
    let newTodos;

    switch (action.type) {
        case types.ADD_WISH:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case types.DELETE_WISH:
            newTodos = [...state];
            return newTodos.filter((wish) => action.payload !== wish.id);

        case types.UPDATE_WISH:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            break;
        default:
            return state;
    }
};
export default wishesReducer;
