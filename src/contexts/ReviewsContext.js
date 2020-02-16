import React, { createContext, useState, useReducer } from 'react'
import { ReviewsReducer } from '../reducers/ReviewsReducer'

export const ReviewsContext = createContext()

const ReviewsContextProvider = (props) => {
    const [reviews, setReviews] = useState([
        {
            company: 'The Food Network',
            author: 'Joe Bastiachi',
            authorInfo: 'Winner Of The Chef Masters',
            highlight: 'Best Restaurant in the GTA!',
            review:
                'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
        },
        {
            company: 'Rate Your Food',
            author: 'Joe Bastiachi',
            authorInfo: 'Winner Of The Chef Masters',
            highlight: 'Best Restaurant in North York!',
            review:
                'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
        },
        {
            company: 'Food Critic',
            author: 'Joe Bastiachi',
            authorInfo: 'Winner Of The Chef Masters',
            highlight: 'Best Restaurant in Etobicoke!',
            review:
                'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
        },
        {
            company: 'Regal Prime',
            author: 'Joe Bastiachi',
            authorInfo: 'Winner Of The Chef Masters',
            highlight: 'Best Restaurant in Scarborough!',
            review:
                'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
        },
        {
            company: 'Steak International',
            author: 'Joe Bastiachi',
            authorInfo: 'Winner Of The Chef Masters',
            highlight: 'Best Restaurant in Markham!',
            review:
                'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
        }
    ])
    const [currentReview, dispatch] = useReducer(ReviewsReducer, 0)

    return(
        // eslint-disable-next-line no-sequences
        <ReviewsContext.Provider value={{reviews, currentReview, dispatch}}>
            {props.children}
        </ReviewsContext.Provider>
    )
}

export default ReviewsContextProvider
