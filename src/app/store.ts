import { configureStore, createSlice } from '@reduxjs/toolkit'
// import { taskModel } from "entities/task";

const testSlice = createSlice({
    initialState: null,
    name: 'testReducer',
    reducers: {
        testAction: (state) => {
            state
        },
    },
})

export const store = configureStore({
    reducer: {
        tasks: testSlice.reducer,
    },
})
