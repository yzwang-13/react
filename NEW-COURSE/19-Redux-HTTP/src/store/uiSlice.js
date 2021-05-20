import {createSlice, current} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        show:false,
        notification: null
    },
    reducers: {
        toggleCart: state => {
            // console.log(current(state.show))
            // console.log('toggle')
            // console.log(state.show)
            const oldState = state.show;
            state.show = !oldState
        },
        showNotification: (state, action) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export default uiSlice;
export const uiSliceActions = uiSlice.actions;
