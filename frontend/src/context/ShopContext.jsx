import React, { createContext, useState, useEffect, useRef } from 'react'
import { products } from '../assets/asset'
import { toast } from 'react-toastify'
import { gsap } from 'gsap'

// Custom GSAP Notification Component
const GsapToast = ({ message, type, closeToast }) => {
    const elRef = useRef(null);

    useEffect(() => {
        // Entrance animation
        gsap.fromTo(elRef.current, 
            { y: 50, scale: 0.8, opacity: 0 },
            { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }
        );
    }, []);

    return (
        <div 
            ref={elRef} 
            className="flex items-start gap-3 px-3.5 py-3 rounded shadow-[0_4px_15px_rgb(0,0,0,0.08)] bg-white w-[280px] relative mx-auto my-2 border border-gray-100"
        >
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
                {type === 'add' ? (
                    // Green Tick SVG Circle
                    <svg className="w-6 h-6 text-[#00d26a]" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="12" />
                        <path fill="#ffffff" d="M10.495 16.5l-4.5-4.5 1.41-1.41 3.09 3.09 7.09-7.09 1.41 1.41-8.5 8.5z" />
                    </svg>
                ) : (
                    // Red Cross SVG Circle
                    <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="12" />
                        <path fill="#ffffff" d="M16.243 7.757a1 1 0 00-1.414 0L12 10.586 9.172 7.757a1 1 0 00-1.414 1.414L10.586 12l-2.828 2.828a1 1 0 101.414 1.414L12 13.414l2.828 2.828a1 1 0 001.414-1.414L13.414 12l2.828-2.828a1 1 0 000-1.414z" />
                    </svg>
                )}
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 pr-2">
                <p className={`text-[13px] font-semibold tracking-wide ${type === 'add' ? 'text-[#00d26a]' : 'text-red-500'}`}>
                    {type === 'add' ? 'SUCCESS!' : 'REMOVED!'}
                </p>
                <p className="text-gray-500 text-[12px] mt-[1px] leading-snug">
                    {message}
                </p>
            </div>

            {/* Close Button */}
            <button 
                onClick={closeToast}
                className="flex-shrink-0 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = 'Rs.'
    const delivery_fee = 150
    
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : {};
        } catch (error) {
            return {};
        }
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId, size) => {
        if (!size) {
           size = "unselected";
        }
        
        let cartData = structuredClone(cartItems);
        
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        
        setCartItems(cartData);
        setIsCartOpen(true);
        toast(<GsapToast message="Item added to cart!" type="add" />);
    }
    
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {}
            }
        }
        return totalCount;
    }
    
    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        
        if (quantity <= 0) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
            toast(<GsapToast message="Item removed from cart" type="remove" />);
        } else {
            cartData[itemId][size] = quantity;
        }
        setCartItems(cartData);
    }

    const updateSize = (itemId, oldSize, newSize) => {
        if (oldSize === newSize) return;
        
        let cartData = structuredClone(cartItems);
        const quantityToMove = cartData[itemId][oldSize];
        
        // Remove from old size
        delete cartData[itemId][oldSize];
        
        // Add to new size
        if (cartData[itemId][newSize]) {
            cartData[itemId][newSize] += quantityToMove;
        } else {
            cartData[itemId][newSize] = quantityToMove;
        }
        
        setCartItems(cartData);
    }
    
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product.id === items);
            if (itemInfo) {
                for (const item in cartItems[items]) {
                    try {
                        if (cartItems[items][item] > 0) {
                            totalAmount += itemInfo.discountedPrice * cartItems[items][item];
                        }
                    } catch (error) {}
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        updateSize,
        getCartAmount,
        isCartOpen,
        setIsCartOpen
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
