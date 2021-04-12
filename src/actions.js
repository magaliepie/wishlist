import types from './types';

export function addWish(wish) {
    return {
        type: types.ADD_WISH,
        payload: wish,
    };
}
export function deleteWish(wishId) {
    return {
        type: types.DELETE_WISH,
        payload: wishId,
    };
}
export function updateWish(wish) {
    return {
        type: types.UPDATE_WISH,
        payload: wish,
    };
}
