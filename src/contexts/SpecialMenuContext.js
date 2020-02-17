import React, { createContext, useState } from 'react'

export const SpecialMenuContext = createContext()

const SpecialMenuContextProvider = (props) => {
    const [specialMenuData, setSpecialMenuData] = useState([
        {
            title: 'Super BBQ Grill No Smoke',
            description:
                'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
            price: 25
        },
        {
            title: 'Mixed Vegetables',
            description:
                'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
            price: 15
        },
        {
            title: 'All Canadian Mix',
            description:
                'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
            price: 17
        }
    ])
return(
    <SpecialMenuContext.Provider value={{specialMenuData, setSpecialMenuData}}>
        { props.children }
    </SpecialMenuContext.Provider>
)
}

export default SpecialMenuContextProvider