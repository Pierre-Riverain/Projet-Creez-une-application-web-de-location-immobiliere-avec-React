import { createContext, useState } from "react";
import datas from '../../datas/datas.json';


export const DatasContext = createContext();

export const DatasProvider = (props) => {

    const [listOfAccommodations, setListOfAccommodations] = useState(datas);
    const getAccommodation = (index) => {
        const lastIndex = listOfAccommodations.length - 1;
        
        if (index => 0 && index <= lastIndex) {
            return listOfAccommodations[index];
        } else {
            return undefined;
        }
    };
    
    return (
        <DatasContext.Provider value={{listOfAccommodations, getAccommodation}}>
            {props.children}
        </DatasContext.Provider>
    )
};