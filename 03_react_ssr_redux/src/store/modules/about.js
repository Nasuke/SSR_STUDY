
import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
    name: "about",
    initialState: {
        count: 200
    },
    reducers: {
        increment(state, { payload }) {
            state.count += payload
        }
    }
})

export const { increment } = aboutSlice.actions
export default aboutSlice.reducer