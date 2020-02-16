export const ReviewsReducer = (state, action) => {
    switch(action.type){
        case 'CLICK_RIGHT':
            return state + 1
        case 'CLICK_LEFT':
            return state - 1
        default:
            return state
    }
}