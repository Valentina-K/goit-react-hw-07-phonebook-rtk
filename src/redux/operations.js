import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63f251b4aab7d0912506484a.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
  return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name,phone}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name,phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
