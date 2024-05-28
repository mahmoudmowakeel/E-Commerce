import { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext();
const INITIAL_VISIABLE_COUNT = 6;
function MobilesContextProvider({ children }) {
    const [mobiles, setMobiles] = useState();
    const [visiableCount, setVisiableCount] = useState(INITIAL_VISIABLE_COUNT);

    useEffect(function () {
        async function fetchMobiles() {
            try {
                const res = await fetch("/mobiles")
                const data = await res.json();
                data && data.map(obj => Object.assign(obj, { quantity: 1 }))
                setMobiles(data);
            } catch {
                return new Error("Cant Fetch The Data");
            }
        }

        fetchMobiles();
    }, []);

    function handleShowMoreProducts() {
        setVisiableCount((visiableCount) => visiableCount += 3)
    }
    function handleShowLessProducts() {
        setVisiableCount(INITIAL_VISIABLE_COUNT)
    }


    return (
        <MobileContext.Provider value={{ mobiles, visiableCount, handleShowMoreProducts, handleShowLessProducts }}>{children}</MobileContext.Provider>
    )
}

function useMobiles() {
    const context = useContext(MobileContext);
    if (!context) {
        return new Error("Out Of Range");
    }
    return context;
}

export { MobilesContextProvider, useMobiles };
