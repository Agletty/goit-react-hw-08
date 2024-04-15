import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetContacts,
  requestAddContact,
  requestDeleteContact,
  requestUpdateContact,
  // requestLogOut,
} from "../../servises/contactsApi";

export const apiGetUserContacts = createAsyncThunk(
  "phonebook/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiAddNewUserContact = createAsyncThunk(
  "phonebook/addContact",
  async (contact, thunkAPI) => {
    try {
      const data = await requestAddContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteUserContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (contact, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiUpdateUserContact = createAsyncThunk(
  "phonebook/updateContact",
  async (contact, thunkAPI) => {
    try {
      const data = await requestUpdateContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const apiLogoutUser = createAsyncThunk(
//   "auth/logout",
//   async (_, thunkAPI) => {
//     try {
//       await requestLogOut();
//       return null; // Return null or any other value to indicate successful logout
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
