import { createContext, useContext, useEffect, useState } from "react";

const LaptopsContext = createContext();
const INITIAL_VISIABLE_COUNT = 6;

function LaptopsContextProvider({ children }) {
    const [laptops, setLaptops] = useState();
    const [visiableLapCount, setVisiableLapCount] = useState(INITIAL_VISIABLE_COUNT);


    useEffect(function () {
        async function fetchLaptops() {
            try {
                const res = await fetch("/laptops")
                const data = await res.json();
                data && data.map(obj => Object.assign(obj, { quantity: 1 }))
                setLaptops(data);
            } catch {
                return new Error("Cant Fetch The Data");
            }
        }

        fetchLaptops();
    }, []);

    function handleShowMoreLapProducts() {
        setVisiableLapCount((visiableLapCount) => visiableLapCount += 3)
    }
    function handleShowLessLapProducts() {
        setVisiableLapCount(INITIAL_VISIABLE_COUNT)
    }


    return (
        <LaptopsContext.Provider value={{ laptops, visiableLapCount, handleShowMoreLapProducts, handleShowLessLapProducts }}>{children}</LaptopsContext.Provider>
    )
}

function useLaptops() {
    const context = useContext(LaptopsContext);
    if (!context) {
        return new Error("Out Of Range");
    }
    return context;
}

export { LaptopsContextProvider, useLaptops };
