import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63f251b4aab7d0912506484a.mockapi.io/api/v1' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'Delete',
      }),
      invalidatesTags: ['Contact'],
    })
  }),
})
 
  


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery,useAddContactMutation,useDeleteContactMutation } = contactsApi;



/* import { createSlice } from '@reduxjs/toolkit';
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

export const contactsReducer = contactsSlice.reducer; */