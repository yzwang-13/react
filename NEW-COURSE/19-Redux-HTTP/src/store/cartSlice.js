import {createSlice, current} from "@reduxjs/toolkit";

// const item = {
//     '123': {title: 'Test Item', id: '123', quantity: 3, total: 18, price: 6},
//     '456': {title: 'Test Item', id: '456', quantity: 3, total: 18, price: 2}
// }

const initialCartState = {items: {}, totalQuantity: 0}


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            // console.log(current(state.items))
            const item = action.payload;
            console.log('====')
            console.log(current(state.items))
            console.log(item.id)
            if (item === null) {
                return

            } else if (state.items !== undefined) {
                if (!(item.id in state.items) && item.amount > 0){
                    console.log('bbb')
                    const amount = item.amount;
                    const price = item.price;
                    const totalPrice = item.price;
                    const title = item.title;
                    const description = item.description;
                    state.items[item.id] = {amount: amount, price: price, totalPrice: totalPrice, title: title, description: description};
                }else {
                    console.log('aaa')
                    if (state.items[item.id].amount + item.amount === 0) {
                        delete state.items[item.id];
                    }else {
                        state.items[item.id].amount += item.amount;
                        state.items[item.id].totalPrice += (item.price * item.amount);
                    }
                }
                state.totalQuantity += item.amount;
            }
        }
    }

})

export default cartSlice;
export const cartActions = cartSlice.actions;
