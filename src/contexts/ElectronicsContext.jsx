import { createContext, useContext, useEffect, useState } from "react";

const ElectronicsContext = createContext();
const INITIAL_VISIABLE_COUNT = 6;
function ElectronicsContextProvider({ children }) {
    const [electronics, setElectronicss] = useState();
    const [visiableEleCount, setVisiableEleCount] = useState(INITIAL_VISIABLE_COUNT);

    useEffect(function () {
        async function fetchLaptops() {
            try {
                const res = await fetch("/electronics")
                const data = await res.json();
                data && data.map(obj => Object.assign(obj, { quantity: 1 }))
                setElectronicss(data);
            } catch {
                return new Error("Cant Fetch The Data");
            }
        }

        fetchLaptops();
    }, []);

    function handleShowMoreEleProducts() {
        setVisiableEleCount((visiableEleCount) => visiableEleCount += 3)
    }
    function handleShowLessEleProducts() {
        setVisiableEleCount(INITIAL_VISIABLE_COUNT)
    }




    return (
        <ElectronicsContext.Provider value={{ electronics, visiableEleCount, handleShowLessEleProducts, handleShowMoreEleProducts }}>{children}</ElectronicsContext.Provider>
    )
}

function useElectronics() {
    const context = useContext(ElectronicsContext);
    if (!context) {
        return new Error("Out Of Range");
    }
    return context;
}

export { ElectronicsContextProvider, useElectronics };
