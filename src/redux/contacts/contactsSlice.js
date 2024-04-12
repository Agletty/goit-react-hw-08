import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

// const handlePending = (state) => {
//   state.isLoading = true;
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isDeleteContact = null;
  state.isEditContact = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isAddingContact: false,
    isDeleteContact: null,
    isEditContact: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleteContact = action.meta.arg;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isDeleteContact = false;
      })
      .addCase(deleteContact.rejected, handleRejected)

      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.isAddingContact = true;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.isAddingContact = false;
      })
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
