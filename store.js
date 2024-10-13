import { createSlice, configureStore } from '@reduxjs/toolkit'
const contactsSlice = createSlice({
        name: 'counter',
        initialState: {
            contacts: [],
            loading: false,
            error: false,
        },
    reducers: {
    fetchContactsLoading: (state, action) =>
        {
            state.loading = true;
            state.loading = false;
            // return ({
            // ...state,
            // loading: true,
            // error: false,
            // });
        },
        fetchContactsSuccess: (state, action) =>
        {
            state.contacts = action.payload;
            state.loading = false;
            error.loading = false;
            // return ({
            // contacts: action.payload,
            // loading: false,
            // error: false,
            // })
        },
        fetchContactsError: (state, action) =>
        {
            return ({
            ...state,
            loading: false,
            error: true,
            });
        },
    }
})
    export const {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} = contactsSlice.actions;
    export default Store = configureStore({
        reducer: contactsSlice.reducer,
    })