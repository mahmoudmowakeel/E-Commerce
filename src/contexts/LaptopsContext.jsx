import { createContext, useContext, useEffect, useState } from "react";

const laptopsObj = [
    {
        "Info": "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6 Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode",
        "Price": "$253",
        "Url": "https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY218_.jpg",
        "title": "Acer Aspire 3 A315-24P-R7VH Slim Laptop ",
        "id": "e43e"
    },
    {
        "Info": "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
        "Price": "$253",
        "Url": "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_UY218_.jpg",
        "title": "HP 14 Laptop",
        "id": "baf1"
    },
    {
        "Info": "HP Newest 14 Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB Storage(64GB eMMC+128GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, Win 11 S",
        "Price": "$289",
        "Url": "https://m.media-amazon.com/images/I/711OHeRmEaL._AC_UY218_.jpg",
        "title": "HP Newest 14 Ultral Light Laptop for Students and Business",
        "id": "0bc1"
    },
    {
        "Info": "HP Notebook Laptop, 15.6 HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver",
        "Price": "$383",
        "Url": "https://m.media-amazon.com/images/I/61oAh3XrX+L._AC_UY218_.jpg",
        "title": "HP Notebook Laptop",
        "id": "6eb2"
    },
    {
        "Info": "Lenovo - 2022 - IdeaPad 3i - Essential Laptop Computer - Intel Core i5 12th Gen - 15.6 FHD Display - 8GB Memory - 512GB Storage - Windows 11 Pro",
        "Price": "$383",
        "Url": "https://m.media-amazon.com/images/I/71Tp0GOd33L._AC_UY218_.jpg",
        "title": "Lenovo - 2022 - IdeaPad 3i",
        "id": "ee46"
    },
    {
        "Info": "Dell Inspiron 3511 Laptop, 15.6 Full HD Touchscreen, Intel Core i5-1135G7 (Beats Intel i7-1065G7), 32GB DDR4 RAM, 1TB PCIe SSD, SD Card Reader, HDMI, Wi-Fi, Windows 11 Home, Black",
        "Price": "$127",
        "Url": "https://m.media-amazon.com/images/I/719yYrijeKL._AC_UY218_.jpg",
        "title": "Dell Inspiron 3511 Laptop",
        "id": "a565"
    },
    {
        "Info": "ASUS Vivobook 15.6” FHD Laptop, AMD Ryzen 3 3250U, 8GB RAM, 128GB SSD, Windows 11 Home in S Mode, Transparent Silver, M515DA-WS33",
        "Price": "$236",
        "Url": "https://m.media-amazon.com/images/I/61FYc36J93L._AC_UY218_.jpg",
        "title": "ASUS Vivobook 15.6” FHD Laptop",
        "id": "6e69"
    },
    {
        "Info": "Lenovo IdeaPad 1 14 Laptop, 14.0 HD Display, Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Win 11 in S Mode, Cloud Grey",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/71bphKmt0DL._AC_UY218_.jpg",
        "title": "Lenovo IdeaPad 1 14 Laptop",
        "id": "abf8"
    },
    {
        "Info": "HP 17.3 Flagship HD+ Business Laptop, 16GB DDR4 RAM, 1TB PCIe SSD, Intel Quad Core i3-1125G4(Beat i5-1035G4), Bluetooth, HDMI, Webcam, Windows 11, Silver, w/GM Accessories",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/61DF0nkzgxL._AC_UY218_.jpg",
        "title": "HP 17.3 Flagship HD+ Business Laptop",
        "id": "bef9"
    },
    {
        "Info": "Acer Aspire 1 A115-32-C96U Slim Laptop | 15.6 FHD Display | Intel Celeron N4500 Processor | 4GB DDR4 | 128GB eMMC | WiFi 5 | Microsoft 365 Personal 1-Year Subscription | Windows 11 in S Mode, Silver",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/81ux3SQKXrL._AC_UY218_.jpg",
        "title": "Acer Aspire 1 A115-32-C96U Slim Laptop ",
        "id": "dee1"
    },
    {
        "Info": "ASUS TUF Gaming F15 (2022) Gaming Laptop, 15.6” FHD 144Hz Display, GeForce RTX 3050, Intel Core i5-12500H, 16GB DDR4, 512GB PCIe SSD, Wi-Fi 6, Windows 11, FX507ZC-ES53,Mecha Gray",
        "Price": "$692",
        "Url": "https://m.media-amazon.com/images/I/61QzVOkMSKL._AC_UY218_.jpg",
        "title": "ASUS TUF Gaming F15 (2022) Gaming Laptop",
        "id": "edd6"
    },
    {
        "Info": "DELL Inspiron 15 3000 3520 Business Laptop Computer 15.6'' FHD Touchscreen,11th Gen Intel 4 Cores i5-1155G7, with Microsoft Office 365,32G,1TB, Numeric Keypad, Wi-Fi, Webcam, HDMI, Black",
        "Price": "$428",
        "Url": "https://m.media-amazon.com/images/I/61hgevFPmgL._AC_UY218_.jpg",
        "title": "DELL Inspiron 15 3000 3520 Business",
        "id": "1a22"
    },
    {
        "Info": "Lenovo IdeaPad 1 15AMN7 15.6 Laptop AMD Ryzen 3 7320U 8GB RAM 256GB SSD PCIe NVMe Wi-Fi 6 Fingerprint Reader Abyss Blue Windows 11 Home in S Mode (Renewed)",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/61Ay0oimPwL._AC_UY218_.jpg",
        "title": "Lenovo IdeaPad 1 15AMN7 15.6 Laptop",
        "id": "1ebf"
    },
    {
        "Info": "Dell Newest Inspiron 15 3511 Laptop, 15.6 FHD Touchscreen, Intel Core i5-1035G1, 12GB RAM, 256GB PCIe NVMe M.2 SSD, SD Card Reader, Webcam, HDMI, WiFi, Windows 11 Home, Black",
        "Price": "$403",
        "Url": "https://m.media-amazon.com/images/I/71lsq9TesJL._AC_UY218_.jpg",
        "title": "Dell Newest Inspiron 15 3511 Laptop",
        "id": "4f04"
    },
    {
        "Info": "HP 2023 Newest Chromebook Laptop, 14 Inch Display, Intel Celeron N4120 Processor, 4GB RAM, 64GB eMMC, Intel UHD Graphics 600, WiFi, Bluetooth, Chrome OS, Modern Gray",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/51PsNbMd-CL._AC_UY218_.jpg",
        "title": "HP 2023 Newest Chromebook Laptop",
        "id": "0fb4"
    },
    {
        "Info": "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch HD Touchscreen, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0080nr, Snowflake White)",
        "Price": "$127",
        "Url": "https://m.media-amazon.com/images/I/51WLQFo6gBL._AC_UY218_.jpg",
        "title": "HP 14 Laptop",
        "id": "6b54"
    },
    {
        "Info": "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6 Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode",
        "Price": "$253",
        "Url": "https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY218_.jpg",
        "title": "Acer Aspire 3 A315-24P-R7VH Slim Laptop ",
        "id": "1a63"
    },
    {
        "Info": "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
        "Price": "$289",
        "Url": "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_UY218_.jpg",
        "title": "HP 14 Laptop",
        "id": "a524"
    },
    {
        "Info": "HP Newest 14 Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB Storage(64GB eMMC+128GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, Win 11 S",
        "Price": "$289",
        "Url": "https://m.media-amazon.com/images/I/711OHeRmEaL._AC_UY218_.jpg",
        "title": "HP Newest 14 Ultral Light Laptop",
        "id": "4cc8"
    },
    {
        "Info": "HP Notebook Laptop, 15.6 HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/61oAh3XrX+L._AC_UY218_.jpg",
        "title": "HP Notebook Laptop",
        "id": "f6de"
    },
    {
        "Info": "Dell Inspiron 3511 Laptop, 15.6 Full HD Touchscreen, Intel Core i5-1135G7 (Beats Intel i7-1065G7), 32GB DDR4 RAM, 1TB PCIe SSD, SD Card Reader, HDMI, Wi-Fi, Windows 11 Home, Black",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/719yYrijeKL._AC_UY218_.jpg",
        "title": "Dell Inspiron 3511 Laptop",
        "id": "8115"
    },
    {
        "Info": "ASUS Vivobook 15.6” FHD Laptop, AMD Ryzen 3 3250U, 8GB RAM, 128GB SSD, Windows 11 Home in S Mode, Transparent Silver, M515DA-WS33",
        "Price": "$236",
        "Url": "https://m.media-amazon.com/images/I/61FYc36J93L._AC_UY218_.jpg",
        "title": "ASUS Vivobook 15.6” FHD Laptop",
        "id": "cfb1"
    },
    {
        "Info": "Lenovo IdeaPad 1 14 Laptop, 14.0 HD Display, Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Win 11 in S Mode, Cloud Grey",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/71bphKmt0DL._AC_UY218_.jpg",
        "title": "Lenovo IdeaPad 1 14 Laptop",
        "id": "a45a"
    },
    {
        "Info": "HP 17.3 Flagship HD+ Business Laptop, 16GB DDR4 RAM, 1TB PCIe SSD, Intel Quad Core i3-1125G4(Beat i5-1035G4), Bluetooth, HDMI, Webcam, Windows 11, Silver, w/GM Accessories",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/61DF0nkzgxL._AC_UY218_.jpg",
        "title": "HP 17.3 Flagship HD+ Business Laptop",
        "id": "33e4"
    },
    {
        "Info": "Acer Aspire 1 A115-32-C96U Slim Laptop | 15.6 FHD Display | Intel Celeron N4500 Processor | 4GB DDR4 | 128GB eMMC | WiFi 5 | Microsoft 365 Personal 1-Year Subscription | Windows 11 in S Mode, Silver",
        "Price": "$497",
        "Url": "https://m.media-amazon.com/images/I/81ux3SQKXrL._AC_UY218_.jpg",
        "title": "Acer Aspire 1 A115-32-C96U Slim Laptop ",
        "id": "0d62"
    },
    {
        "Info": "ASUS TUF Gaming F15 (2022) Gaming Laptop, 15.6” FHD 144Hz Display, GeForce RTX 3050, Intel Core i5-12500H, 16GB DDR4, 512GB PCIe SSD, Wi-Fi 6, Windows 11, FX507ZC-ES53,Mecha Gray",
        "Price": "$692",
        "Url": "https://m.media-amazon.com/images/I/61QzVOkMSKL._AC_UY218_.jpg",
        "title": "ASUS TUF Gaming F15 (2022) Gaming Laptop",
        "id": "a569"
    }
]

const LaptopsContext = createContext();
const INITIAL_VISIABLE_COUNT = 6;

function LaptopsContextProvider({ children }) {
    const [laptops, setLaptops] = useState();
    const [visiableLapCount, setVisiableLapCount] = useState(INITIAL_VISIABLE_COUNT);


    // useEffect(function () {
    //     async function fetchLaptops() {
    //         try {
    //             const res = await fetch("http://localhost:3001/laptops")
    //             const data = await res.json();
    //             data && data.map(obj => Object.assign(obj, { quantity: 1 }))
    //             setLaptops(data);
    //         } catch {
    //             return new Error("Cant Fetch The Data");
    //         }
    //     }

    //     fetchLaptops();
    // }, []);


    useEffect(function () {
        laptopsObj && laptopsObj.map(obj => Object.assign(obj, { quantity: 1 }))
        setLaptops(laptopsObj)
    }, [])



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
