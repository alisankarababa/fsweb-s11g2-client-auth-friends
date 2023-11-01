import { useState } from "react";


export function useLocalStorage( key, initialValue) {

    const [val, setVal] = useState(()=> {

        const dataFromLS = JSON.parse(localStorage.getItem(key));

        if(dataFromLS)
            return dataFromLS;

        return initialValue;
    })

    function setValAndLS(newVal) {
        localStorage.setItem( key, JSON.stringify(newVal) );
        setVal(newVal);
    }

    return [val, setValAndLS];
}