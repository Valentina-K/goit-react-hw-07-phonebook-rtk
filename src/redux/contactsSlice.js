import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

function isPendingAction(action) {
  return action.type.endsWith('pending')
}

function isRejectedAction(action) {
  return action.type.endsWith('rejected')
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items:[],
        isLoading: false,
        error: null,},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled,(state, action)=> {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
            })
            .addCase(addContact.fulfilled,(state, action)=> {  
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled,(state, action)=> {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);
            })
            .addMatcher(isRejectedAction, handleRejected)
            .addMatcher(isPendingAction,handlePending)
            .addDefaultCase(state => state)      
    }
});

export const contactsReducer = contactsSlice.reducer;