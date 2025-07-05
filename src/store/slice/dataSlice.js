import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/post", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(error)
    }
});

const dataSlice = createSlice({
    name: "data",
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        removeCard(state,action){
            state.list.splice(action.payload,1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
    }
});

export const { removeCard } = dataSlice.actions;

export default dataSlice.reducer;