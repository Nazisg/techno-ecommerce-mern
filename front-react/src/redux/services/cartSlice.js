import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity; 
            } else {
                state.items.push(item)
            }
        },
        removeItem(state, action) {
            const id = action.payload; 
            state.items = state.items.filter((item) => item.id !== id); 
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload; 
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity; 
            }
        },
    },
});

export const selectCartCount = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const { addToCart, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
