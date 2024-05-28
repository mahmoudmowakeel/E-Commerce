import { createContext, useContext, useEffect, useState } from "react";

const mobilesObj = [
    {
        "Info": "OnePlus 12R, 16GB RAM+256GB, Dual-SIM, US Factory Unlocked Android Smartphone, 5500 mAh Battery & 12,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/51jN1iYaSYL._AC_UY218_.jpg",
        "title": "OnePlus 12R",
        "id": "6aad"
    },
    {
        "Info": "iVERTU Calfskin 5G Phone, Unlocked Smartphone, Secure Encrypted, 64MP Camera, 12+512G, 120Hz FHD+(1080 * 2400) OLED Display, Dual SIM, Fast Charge (Stitching, Blue&Brown)",
        "Price": "$4650",
        "Url": "https://m.media-amazon.com/images/I/61fkM9qtR7L._AC_UY218_.jpg",
        "title": "iVERTU Calfskin 5G Phone",
        "id": "5881"
    },
    {
        "Info": "iVERTU Old Style Calfskin 5G Phone, Unlocked Smartphone, Secure Encrypted, 64MP Camera, 12+512G, 120Hz FHD+(1080 * 2400) OLED Display, Dual SIM, Fast Charge (White)",
        "Price": "$3450",
        "Url": "https://m.media-amazon.com/images/I/61e4nkq0HEL._AC_UY218_.jpg",
        "title": "iVERTU Old Style Calfskin 5G Phone",
        "id": "db3c"
    },
    {
        "Info": "Samsung S6 4G with 32GB Memory Cell Phone (Unlocked) - Black, Samsung S6 4G with 32GB Memory Cell Phone (Unlocked) - Black",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/513lcsip7+L._AC_UY218_.jpg",
        "title": "Samsung S6 4G with 32GB Memory Cell Phone (Unlocked) - Black",
        "id": "da48"
    },
    {
        "Info": "Samsung Galaxy S10+ Factory Unlocked Phone with 512GB (U.S. Warranty), Ceramic White with Tab S5e 10.5 Black 64GB Unlocked",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/61AbeVjgb7L._AC_UY218_.jpg",
        "title": "Samsung Galaxy S10+",
        "id": "1b3b"
    },
    {
        "Info": "SAMSUNG Galaxy S22+ Cell Phone, Factory Unlocked Android Smartphone, 128GB Phantom White Galaxy Buds 2 Pro Wireless Bluetooth Earbuds",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/41nAbqsljRL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy S22+ Cell Phone",
        "id": "daa9"
    },
    {
        "Info": "SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy S24 Ultra Cell Phone",
        "id": "06f8"
    },
    {
        "Info": "Apple iPhone 15 Pro Max, 256GB, Blue Titanium - Unlocked (Renewed), Apple iPhone 15 Pro Max, 256GB, Blue Titanium - Unlocked (Renewed),Apple iPhone 15 Pro Max, 256GB, Blue Titanium - Unlocked (Renewed)",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/61rDLIISfiL._AC_UY218_.jpg",
        "title": "Apple iPhone 15 Pro Max",
        "id": "e264"
    },
    {
        "Info": "OnePlus Open, 16GB RAM+512GB, Dual-SIM, Voyager Black, US Factory Unlocked Android Smartphone, 4805 mAh Battery, 67W Fast Charging, Hasselblad Camera, 120Hz Fluid Display",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/71slFjJerBL._AC_UY218_.jpg",
        "title": "OnePlus Open",
        "id": "c000"
    },
    {
        "Info": "Google Pixel 8 Pro - Unlocked Android Smartphone with Telephoto Lens and Super Actua Display - 24-Hour Battery - Bay - 256 GB",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/713eEl39eLL._AC_UY218_.jpg",
        "title": "Google Pixel 8 Pro ",
        "id": "037c"
    },
    {
        "Info": "SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 256GB Phantom Black Galaxy Buds 2 Pro Wireless Bluetooth Earbuds",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/31bdRCFR+NL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy S22 Cell Phone",
        "id": "5ef2"
    },
    {
        "Info": "OnePlus 11 5G | 16GB RAM+256GB | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh Battery & Buds Pro 2 - Obsidian Black - Audiophile-Grade Sound Quality Co-Created with Dynaudio",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/41Z+95iLxJL._AC_UY218_.jpg",
        "title": "OnePlus 11 5G ",
        "id": "727f"
    },
    {
        "Info": "Samsung Galaxy S8+ Plus SM-G955FD 64GB Dual Sim Unlocked Phone -US/Latin America Version (Midnight Black) 1 Year Warranty",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/51XLgxLXpvL._AC_UY218_.jpg",
        "title": "Samsung Galaxy S8+ Plus",
        "id": "210e"
    },
    {
        "Info": "Apple iPhone 14 Pro Max, 512GB, Space Black - Unlocked (Renewed Premium), Apple iPhone 15 Pro Max, 256GB, Blue Titanium - Unlocked (Renewed)",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_UY218_.jpg",
        "title": "Apple iPhone 14 Pro Max",
        "id": "7e44"
    },
    {
        "Info": "SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 512GB, Flex Mode, Hands Free Video, Multi Window View, Foldable Display, S Pen Compatible, US Version, 2022, Phantom Black",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/81TH5W29HgL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy Z Fold 4 Cell Phone",
        "id": "f413"
    },
    {
        "Info": "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 256GB, Graphite with $100 Amazon.com Gift Card",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/51J56NcExrL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy S21 FE 5G Cell Phone",
        "id": "deff"
    },
    {
        "Info": "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 256GB Galaxy Buds 2 True Wireless Bluetooth Earbuds, Graphite",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/41yao1CWyoL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy S21 FE 5G Cell Phone",
        "id": "aa23"
    },
    {
        "Info": "SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 128GB Pink Gold Galaxy Buds 2 Pro Wireless Bluetooth Earbuds",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/31euiOn17jL._AC_UY218_.jpg",
        "title": "SAMSUNG Galaxy S22 Cell Phone",
        "id": "5796"
    },
    {
        "Info": "Apple iPhone 13 Pro (1TB, Gold) [Locked] + Carrier Subscription, Apple iPhone 15 Pro Max, 256GB, Blue Titanium - Unlocked (Renewed)",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_UY218_.jpg",
        "title": "Apple iPhone 13 Pro (1TB",
        "id": "7dbf"
    },
    {
        "Info": "OnePlus 12,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging & AIRVOOC 50W Wireless Charger",
        "Price": "$1969",
        "Url": "https://m.media-amazon.com/images/I/41qYdFNqzGL._AC_UY218_.jpg",
        "title": "OnePlus 12",
        "id": "47fc"
    }
]




const MobileContext = createContext();
const INITIAL_VISIABLE_COUNT = 6;
function MobilesContextProvider({ children }) {
    const [mobiles, setMobiles] = useState();
    const [visiableCount, setVisiableCount] = useState(INITIAL_VISIABLE_COUNT);

    // useEffect(function () {
    //     async function fetchMobiles() {
    //         try {
    //             const res = await fetch("http://localhost:3001/mobiles")
    //             const data = await res.json();
    //             data && data.map(obj => Object.assign(obj, { quantity: 1 }))
    //             setMobiles(data);
    //         } catch {
    //             return new Error("Cant Fetch The Data");
    //         }
    //     }

    //     fetchMobiles();
    // }, []);


    useEffect(function () {
        mobilesObj && mobilesObj.map(obj => Object.assign(obj, { quantity: 1 }))
        setMobiles(mobilesObj)
    }, [])


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
