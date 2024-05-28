import { createContext, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const allObj = [
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
    },
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
    },
    {
        "Info": "iPhone 15 Charger Fast Charging, iPad Charger 4Pack 6FT USB C to C Charging Cable Cord with 4Pack 20W iPhone Fast Charger Block for iPhone 15/15 pro/15 pro max/15 Plus,iPad Pro 12.9/11 in,iPad air 5/4",
        "Price": "$18",
        "Url": "https://m.media-amazon.com/images/I/71yL3o5-QoL._SX466_.jpg",
        "title": "iPhone 15 Charger Fast Charging, iPad Charger",
        "id": "be23"
    },
    {
        "Info": "Amazon Basics USB-A to Lightning Charger Cable, Nylon Braided Cord, MFi Certified Charger for Apple iPhone 14 13 12 11 X Xs Pro, Pro Max, Plus, iPad, 6 Foot, Dark Gray",
        "Price": "$9",
        "Url": "https://m.media-amazon.com/images/I/51bL094WehL._AC_SY741_.jpg",
        "title": "Amazon Basics USB-A to Lightning Charger Cable",
        "id": "0b94"
    },
    {
        "Info": "Phone Charger [MFi Certified] 2 Pack 20W PD USB C Wall Fast Charger Adapter with 2 Pack 6FT Type C to Lightning Cable Compatible for iPhone 14 13 12 11 Pro Max XR XS X,iPad",
        "Price": "$19",
        "Url": "https://m.media-amazon.com/images/I/51vqYPmotDL._AC_SX425_.jpg",
        "title": "Phone Charger [MFi Certified] ",
        "id": "d75b"
    },
    {
        "Info": "6Pack(3/3/6/6/6/10 FT) Original [Apple MFi Certified] iPhone Charger Fast Charging Lightning Cable iPhone Charger Cord Compatible with iPhone 14/13/12/11 Pro Max/XS MAX/XR/XS/X/8/7 Plus iPad AirPods",
        "Price": "$18",
        "Url": "https://m.media-amazon.com/images/I/6119qKXTxLL._SX425_.jpg",
        "title": "6Pack(3/3/6/6/6/10 FT) Original [Apple MFi Certified]",
        "id": "2d9d"
    },
    {
        "Info": "GREPHONE iPhone Charger Fast Charging,20W PD USB C Wall Charger 4 Pack with 6FT Fast Charging Cable - Fast Charger for iPhone 14/14 Pro Max/13/13 Pro/12/12 Pro/11/11 Pro/XS, iPad",
        "Price": "$19",
        "Url": "https://m.media-amazon.com/images/I/61Necl1rkDL._AC_SX679_.jpg",
        "title": "GREPHONE iPhone Charger Fast Charging",
        "id": "c254"
    },
    {
        "Info": "Schumacher Electric SC1281 Fully Automatic Battery Charger and Jump Starter for Car, SUV, Truck, and Boat Batteries, 100 Cranking Amps, 30-Amp Boost Mode, 6 Volt, 12 Volt, Black",
        "Price": "$89",
        "Url": "https://m.media-amazon.com/images/I/61kTgizc9YL._AC_SX679_.jpg",
        "title": "Schumacher Electric SC1281 Fully Automatic Battery Charger",
        "id": "84d1"
    },
    {
        "Info": "Intoval 140W USB C Charger Block: 8-Port Charging Station for Multiple Devices iPhone, MacBook, Galaxy, iPad & More (K44,Black)",
        "Price": "$50",
        "Url": "https://m.media-amazon.com/images/I/61ZWu56A6wL._AC_SX425_.jpg",
        "title": "Intoval 140W USB C Charger Block",
        "id": "5bec"
    },
    {
        "Info": "Novtech Lightning Cable MFi Certified, iPhone Charger 3 Pack 3FT Lightning to USB Cable Cord, 2.4AFast Charging Wire Compatible with iPhone 14 13 12 11 Pro Max Mini SE XS MAX XR X 8 7 6 Plus, White",
        "Price": "$14",
        "Url": "https://m.media-amazon.com/images/I/51FnrqfrOsL._AC_SX679_.jpg",
        "title": "Novtech Lightning Cable MFi Certified",
        "id": "48bb"
    },
    {
        "Info": "[2-Pack] iPhone 15 Charger Block, 35W 3-Port Fast USB C Charger Block Dual Port PD Power Adapter + QC Wall Plug Multiport USB C Wall Charger Block for iPhone 15/15 Pro/15 Pro Max/15 Plus/14/13/12/11/X",
        "Price": "$22",
        "Url": "https://m.media-amazon.com/images/I/51oUg6RqPuL._SX425_.jpg",
        "title": "[2-Pack] iPhone 15 Charger Block",
        "id": "8844"
    },
    {
        "Info": "Anker USB C 715 (Nano 65W), GaN II Fast Compact Foldable Charger for MacBook, Galaxy S20/S10, Dell XPS 13, Note 20/10+, iPhone 13/Mini, iPad Pro, Pixel, and More",
        "Price": "$27",
        "Url": "https://m.media-amazon.com/images/I/61PRvw0FyDL._AC_SX425_.jpg",
        "title": "Anker USB C 715 (Nano 65W)",
        "id": "ffa5"
    },
    {
        "Info": "Amazon Basics 2-Pack USB-A to Lightning ABS Charger Cable, MFi Certified Charger for Apple iPhone 14 13 12 11 X Xs Pro, Pro Max, Plus, iPad, 6 Foot, White",
        "Price": "$15.45",
        "Url": "https://m.media-amazon.com/images/I/61EUDPldEiL._AC_SX679_.jpg",
        "title": "Amazon Basics 2-Pack",
        "id": "0c9d"
    },
    {
        "Info": "Ximytec 20W USB C Fast Charger [MFi Certified] Compatible with iPhone 14/13/ 12/11/ XS/XR/X/ 8 /iPad, 2Pack PD Type C Charger Blocks with 6FT Type-C to Lightning Cables",
        "Price": "$8",
        "Url": "https://m.media-amazon.com/images/I/51szWBozLKL._AC_SX569_.jpg",
        "title": "Ximytec 20W USB C Fast Charger  ",
        "id": "593a"
    },
    {
        "Info": "UGREEN 100W USB C Charger, Nexode 4-Port GaN Foldable Compact Fast Wall Charger Power Adapter for MacBook Pro/Air, iPad Pro, iPhone 15 Pro, Galaxy S24 Ultra, Steam Deck, Google Pixelbook",
        "Price": "$69",
        "Url": "https://m.media-amazon.com/images/I/516szWmX2ZL._AC_SX425_.jpg",
        "title": "UGREEN 100W USB C Charger",
        "id": "c01d"
    },
    {
        "Info": "[Apple MFi Certified] iPhone Charger, 6Pack(3/3/6/6/6/10 FT) Lightning Cable Apple Charging Fast High Speed USB Compatible 14/13/12/11 Pro Max/XS MAX/XR/XS/X/8-multicolor",
        "Price": "$12",
        "Url": "https://m.media-amazon.com/images/I/713u0uCrc3L._AC_SX679_.jpg",
        "title": "[Apple MFi Certified] iPhone Charger",
        "id": "62e8"
    },
    {
        "Info": "3 in 1 Charging Station for iPhone, Wireless Charger for iPhone 15 14 13 12 11 X Pro Max & Apple Watch - Wireless Charging Station for AirPods Pro 3 2",
        "Price": "$18",
        "Url": "https://m.media-amazon.com/images/I/61VwfUI+-eL._AC_SX425_.jpg",
        "title": "3 in 1 Charging Station for iPhone",
        "id": "cc59"
    },
    {
        "Info": "Amazon Basics USB-C to Lightning ABS Charger Cable, MFi Certified Charger for Apple iPhone 14 13 12 11 X Xs Pro, Pro Max, Plus, iPad, 3 Foot, Black",
        "Price": "$12.59",
        "Url": "https://m.media-amazon.com/images/I/41A9vyNxj7L._AC_SY741_.jpg",
        "title": "Amazon Basics USB-C to Lightning ABS",
        "id": "e871"
    }

]

const MainContext = createContext();


function MainContextProvider({ children }) {
    const { titleId } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const formRef = useRef(null);
    const logInRef = useRef(null);
    const bglogin = useRef(null);
    const navRef = useRef(null);
    const navBgRef = useRef(null)
    let [cart, setCart] = useState([]);
    const [shippingFee, setShippingFee] = useState("free");
    const [newOrder, setNewOrder] = useState({});
    let afterCart = cart?.length?.toString();
    let cartTotalPrice = cart?.length > 0 ? cart?.map(item => item.quantity * (item.price?.replace("$", ""))).reduce((cur, next) => Number(cur) + Number(next)) : 0;
    const [sign, setSign] = useState("sign-in");
    const usedProduct = products?.filter(product => product.title === titleId)[0];



    // useEffect(function () {
    //     async function fetchMobiles() {
    //         try {
    //             const endpoints = [
    //                 'http://localhost:3001/mobiles',
    //                 'http://localhost:3001//laptops',
    //                 'http://localhost:3001//electronics'
    //             ];

    //             const [smartphones, laptops, tablets] = await Promise.all(
    //                 endpoints.map(endpoint => fetch(endpoint).then(response => response.json()))
    //             );

    //             // Combine the data from all endpoints
    //             const combinedData = [...smartphones, ...laptops, ...tablets];
    //             combinedData && combinedData.map(obj => Object.assign(obj, { quantity: 1 }))
    //             setProducts(combinedData)
    //             console.log(combinedData)
    //         }
    //         catch {
    //             return new Error("Cant Fetch The Data");
    //         }
    //     }

    //     fetchMobiles();
    // }, []);

    useEffect(function () {
        allObj && allObj.map(obj => Object.assign(obj, { quantity: 1 }))
        setProducts(allObj)
    }, [])



    useEffect(function () {
        function addId() {
            if (cart?.length > 0) {
                Object.assign(newOrder, { id: Math.random().toString().slice(4) })
            }
        }

        addId()

    }, [newOrder, cart?.length])






    function showProductInfo(titleId) {
        navigate(`/product/${titleId}`)
    }

    function addToCart(productObj) {
        if (cart?.some(item => item.title === productObj.title)) {
            toast.error('This Item Has Been Added To Cart Before')
        } else {
            setCart([...cart, productObj]);
            toast.success("Item Has Been Added To Cart Successfully")
        }
    }

    function handleQuantityInc(title) {
        setCart(cart?.map(item => item.title === title ? { ...item, quantity: item.quantity + 1 } : item))
    }
    function handleQuantityDec(title) {
        setCart(cart?.map(item => item.title === title ? { ...item, quantity: item.quantity === 1 ? item.quantity : item.quantity - 1 } : item))
    }

    const handleExternalSubmit = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
    };

    function handleDeleteItemCart(title) {
        setCart(prevCart => cart?.filter(item => item.title !== title))
    }

    function handleSignIn() {
        setSign("sign-in")
    }
    function handleSignUp() {
        setSign("sign-up")
    }

    function handleLogin() {
        logInRef.current.classList.toggle("login");
        bglogin.current.classList.toggle("bg-visiable")
    }

    function bgLoginHandler() {
        logInRef.current.classList.toggle("login");
        bglogin.current.classList.toggle("bg-visiable")
    }
    function handleNav() {
        navRef.current.classList.toggle("nav-tog");
        navBgRef.current.classList.toggle("bg-visiable")
    }

    function bgNavHandler() {
        navRef.current.classList.toggle("nav-tog");
        navBgRef.current.classList.toggle("bg-visiable")
    }




    return (
        <MainContext.Provider value={{ showProductInfo, products, cart, addToCart, cartTotalPrice, handleQuantityInc, handleQuantityDec, shippingFee, setShippingFee, handleExternalSubmit, formRef, newOrder, setNewOrder, afterCart, navigate, sign, handleSignUp, handleSignIn, logInRef, handleLogin, bglogin, bgLoginHandler, handleNav, bgNavHandler, navBgRef, navRef, handleDeleteItemCart, titleId, usedProduct }}>{children}</MainContext.Provider>
    )
}


function useMain() {
    const context = useContext(MainContext);

    if (!context) {
        return new Error("Out Of Range")
    }

    return context
}

export { MainContextProvider, useMain }