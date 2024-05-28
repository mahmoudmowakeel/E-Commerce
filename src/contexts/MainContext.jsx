import { createContext, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

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



    useEffect(function () {
        async function fetchMobiles() {
            try {
                const endpoints = [
                    'http://localhost:3001/mobiles',
                    'http://localhost:3001/laptops',
                    'http://localhost:3001/electronics'
                ];

                const [smartphones, laptops, tablets] = await Promise.all(
                    endpoints.map(endpoint => fetch(endpoint).then(response => response.json()))
                );

                // Combine the data from all endpoints
                const combinedData = [...smartphones, ...laptops, ...tablets];
                combinedData && combinedData.map(obj => Object.assign(obj, { quantity: 1 }))
                setProducts(combinedData)
            }
            catch {
                return new Error("Cant Fetch The Data");
            }
        }

        fetchMobiles();
    }, []);

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