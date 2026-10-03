/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react'
import { products } from '../assets/asset'
import { notify } from '../utils/toast'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = 'Rs.'
    const delivery_fee = 150
    
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : {};
        } catch {
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
        notify("Item added to cart!", "add");
    }
    
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch {
                    // ignore calculation error
                }
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
            notify("Item removed from cart", "remove");
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
                    } catch {
                        // ignore invalid item
                    }
                }
            }
        }
        return totalAmount;
    }

    const clearCart = () => {
        setCartItems({});
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
        clearCart,
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
