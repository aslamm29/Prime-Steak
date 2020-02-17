import React, { createContext, useState } from 'react'

export const CompanyInfoContext = createContext()

const CompanyInfoContextProvider = (props) => {
    const[companyInfo, setCompanyInfo] = useState({
        title: 'PRIME STEAK RESTAURANT',
        phone: '(647) - 925 - 7932',
        location: 'Toronto, Ontario'
    })
return(
    <CompanyInfoContext.Provider value={{companyInfo, setCompanyInfo}}>
        {props.children}
    </CompanyInfoContext.Provider>
)
}

export default CompanyInfoContextProvider