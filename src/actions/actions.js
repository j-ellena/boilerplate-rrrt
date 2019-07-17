export const increaseClicked = count => {
    return {
        type: 'INCREASE_COUNT',
        count
    };
};

export const decreaseClicked = count => {
    return {
        type: 'DECREASE_COUNT',
        count
    };
};
