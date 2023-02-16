
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: "home",
    initialState: {
        count:100
    },
    reducers: {
        increment(state, { payload }) {
            state.count += payload
        }
    }
})

export const { increment } = homeSlice.actions
export default homeSlice.reducer