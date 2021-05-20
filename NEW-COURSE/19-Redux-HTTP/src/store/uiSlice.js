import {createSlice, current} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {show:false},
    reducers: {
        toggleCart: state => {
            // console.log(current(state.show))
            // console.log('toggle')
            // console.log(state.show)
            const oldState = state.show;
            state.show = !oldState
        }
    }
})

export default uiSlice;
export const uiSliceActions = uiSlice.actions;
