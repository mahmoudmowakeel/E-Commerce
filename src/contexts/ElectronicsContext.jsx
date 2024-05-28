import { createContext, useContext, useEffect, useState } from "react";

const electronicsObj = [
    {
        "Info": "iPhone 15 Charger Fast Charging, iPad Charger 4Pack 6FT USB C to C Charging Cable Cord with 4Pack 20W iPhone Fast Charger Block for iPhone 15/15 pro/15 pro max/15 Plus,iPad Pro 12.9/11 in,iPad air 5/4",
        "Price": "$18",
        "Url": "https://m.media-amazon.com/images/I/71yL3o5-QoL._SX466_.jpg",
        "title": "iPhone 15 Charger Fast Charging, iPad Charger",
        "id": "c826"
    },
    {
        "Info": "Amazon Basics USB-A to Lightning Charger Cable, Nylon Braided Cord, MFi Certified Charger for Apple iPhone 14 13 12 11 X Xs Pro, Pro Max, Plus, iPad, 6 Foot, Dark Gray",
        "Price": "$9",
        "Url": "https://m.media-amazon.com/images/I/51bL094WehL._AC_SY741_.jpg",
        "title": "Amazon Basics USB-A to Lightning Charger Cable",
        "id": "6212"
    },
    {
        "Info": "Phone Charger [MFi Certified] 2 Pack 20W PD USB C Wall Fast Charger Adapter with 2 Pack 6FT Type C to Lightning Cable Compatible for iPhone 14 13 12 11 Pro Max XR XS X,iPad",
        "Price": "$19",
        "Url": "https://m.media-amazon.com/images/I/51vqYPmotDL._AC_SX425_.jpg",
        "title": "Phone Charger [MFi Certified] ",
        "id": "2bde"
    },
    {
        "Info": "6Pack(3/3/6/6/6/10 FT) Original [Apple MFi Certified] iPhone Charger Fast Charging Lightning Cable iPhone Charger Cord Compatible with iPhone 14/13/12/11 Pro Max/XS MAX/XR/XS/X/8/7 Plus iPad AirPods",
        "Price": "$18",
        "Url": "https://m.media-amazon.com/images/I/6119qKXTxLL._SX425_.jpg",
        "title": "6Pack(3/3/6/6/6/10 FT) Original [Apple MFi Certified]",
        "id": "f327"
    },
    {
        "Info": "GREPHONE iPhone Charger Fast Charging,20W PD USB C Wall Charger 4 Pack with 6FT Fast Charging Cable - Fast Charger for iPhone 14/14 Pro Max/13/13 Pro/12/12 Pro/11/11 Pro/XS, iPad",
        "Price": "$19",
        "Url": "https://m.media-amazon.com/images/I/61Necl1rkDL._AC_SX679_.jpg",
        "title": "GREPHONE iPhone Charger Fast Charging",
        "id": "7eba"
    },
    {
        "Info": "Schumacher Electric SC1281 Fully Automatic Battery Charger and Jump Starter for Car, SUV, Truck, and Boat Batteries, 100 Cranking Amps, 30-Amp Boost Mode, 6 Volt, 12 Volt, Black",
        "Price": "$89",
        "Url": "https://m.media-amazon.com/images/I/61kTgizc9YL._AC_SX679_.jpg",
        "title": "Schumacher Electric SC1281 Fully Automatic Battery Charger",
        "id": "b203"
    },
    {
        "Info": "Intoval 140W USB C Charger Block: 8-Port Charging Station for Multiple Devices iPhone, MacBook, Galaxy, iPad & More (K44,Black)",
        "Price": "$50",
        "Url": "https://m.media-amazon.com/images/I/61ZWu56A6wL._AC_SX425_.jpg",
        "title": "Intoval 140W USB C Charger Block",
        "id": "c161"
    },
    {
        "Info": "Novtech Lightning Cable MFi Certified, iPhone Charger 3 Pack 3FT Lightning to USB Cable Cord, 2.4AFast Charging Wire Compatible with iPhone 14 13 12 11 Pro Max Mini SE XS MAX XR X 8 7 6 Plus, White",
        "Price": "$14",
        "Url": "https://m.media-amazon.com/images/I/51FnrqfrOsL._AC_SX679_.jpg",
        "title": "Novtech Lightning Cable MFi Certified",
        "id": "78e4"
    },
    {
        "Info": "[2-Pack] iPhone 15 Charger Block, 35W 3-Port Fast USB C Charger Block Dual Port PD Power Adapter + QC Wall Plug Multiport USB C Wall Charger Block for iPhone 15/15 Pro/15 Pro Max/15 Plus/14/13/12/11/X",
        "Price": "$22",
        "Url": "https://m.media-amazon.com/images/I/51oUg6RqPuL._SX425_.jpg",
        "title": "[2-Pack] iPhone 15 Charger Block",
        "id": "5dfe"
    },
    {
        "Info": "Anker USB C 715 (Nano 65W), GaN II Fast Compact Foldable Charger for MacBook, Galaxy S20/S10, Dell XPS 13, Note 20/10+, iPhone 13/Mini, iPad Pro, Pixel, and More",
        "Price": "$27",
        "Url": "https://m.media-amazon.com/images/I/61PRvw0FyDL._AC_SX425_.jpg",
        "title": "Anker USB C 715 (Nano 65W)",
        "id": "e33b"
    },
    {
        "Info": "Amazon Basics 2-Pack USB-A to Lightning ABS Charger Cable, MFi Certified Charger for Apple iPhone 14 13 12 11 X Xs Pro, Pro Max, Plus, iPad, 6 Foot, White",
        "Price": "$15.45",
        "Url": "https://m.media-amazon.com/images/I/61EUDPldEiL._AC_SX679_.jpg",
        "title": "Amazon Basics 2-Pack",
        "id": "7e20"
    },
    {
        "Info": "Ximytec 20W USB C Fast Charger [MFi Certified] Compatible with iPhone 14/13/ 12/11/ XS/XR/X/ 8 /iPad, 2Pack PD Type C Charger Blocks with 6FT Type-C to Lightning Cables",
        "Price": "$8",
        "Url": "https://m.media-amazon.com/images/I/51szWBozLKL._AC_SX569_.jpg",
        "title": "Ximytec 20W USB C Fast Charger  ",
        "id": "6e0c"
    },
    {
        "Info": "UGREEN 100W USB C Charger, Nexode 4-Port GaN Foldable Compact Fast Wall Charger Power Adapter for MacBook Pro/Air, iPad Pro, iPhone 15 Pro, Galaxy S24 Ultra, Steam Deck, Google Pixelbook",
        "Price": "$69",
        "Url": "https://m.media-amazon.com/images/I/516szWmX2ZL._AC_SX425_.jpg",
        "title": "UGREEN 100W USB C Charger",
        "id": "a24d"
    },
    {
        "Info": "[Apple MFi Certified] iPhone Charger, 6Pack(3/3/6/6/6/10 FT) Lightning Cable Apple Charging Fast High Speed USB Compatible 14/13/12/11 Pro Max/XS MAX/XR/XS/X/8-multicolor",
        "Price": "$12",
        "Url": "https://m.media-amazon.com/images/I/713u0uCrc3L._AC_SX679_.jpg",
        "title": "[Apple MFi Certified] iPhone Charger",
        "id": "2971"
    },
    {
        "Info": "3 in 1 Charging Station for iPhone, Wireless Charger for iPhone 15 14 13 12 11 X Pro Max & Apple Watch - Wireless Charging Station for AirPods Pro 3 2",
        "Price": "$18",
        "Url": "https://m.media-amazon.com/images/I/61VwfUI+-eL._AC_SX425_.jpg",
        "title": "3 in 1 Charging Station for iPhone",
        "id": "be0d"
    },
    {
        "Info": "Amazon Basics USB-C to Lightning ABS Charger Cable, MFi Certified Charger for Apple iPhone 14 13 12 11 X Xs Pro, Pro Max, Plus, iPad, 3 Foot, Black",
        "Price": "$12.59",
        "Url": "https://m.media-amazon.com/images/I/41A9vyNxj7L._AC_SY741_.jpg",
        "title": "Amazon Basics USB-C to Lightning ABS",
        "id": "9d2b"
    }
]

const ElectronicsContext = createContext();
const INITIAL_VISIABLE_COUNT = 6;
function ElectronicsContextProvider({ children }) {
    const [electronics, setElectronicss] = useState();
    const [visiableEleCount, setVisiableEleCount] = useState(INITIAL_VISIABLE_COUNT);

    // useEffect(function () {
    //     async function fetchLaptops() {
    //         try {
    //             const res = await fetch("http://localhost:3001/electronics")
    //             const data = await res.json();
    //             data && data.map(obj => Object.assign(obj, { quantity: 1 }))
    //             setElectronicss(data);
    //             console.log(data)
    //         } catch {
    //             return new Error("Cant Fetch The Data");
    //         }
    //     }

    //     fetchLaptops();
    // }, []);


    useEffect(function () {
        electronicsObj && electronicsObj.map(obj => Object.assign(obj, { quantity: 1 }))
        setElectronicss(electronicsObj)
    }, [])

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
