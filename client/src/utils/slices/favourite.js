import { createSlice } from "@reduxjs/toolkit";


const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        items:  [],
    },
    reducers: {
        additem : (state, action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state, action)=>{
            state.items.pop()
        }
    }
})

export const {additem, removeItem} = favouriteSlice.actions;
export default favouriteSlice.reducer