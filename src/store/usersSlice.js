import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})


export const { changeInput, addUser } = usersSlice.actions

export default usersSlice.reducer