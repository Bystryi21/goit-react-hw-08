import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://66ec5c322b6cf2b89c5e340f.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://66ec5c322b6cf2b89c5e340f.mockapi.io/contacts"
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://66ec5c322b6cf2b89c5e340f.mockapi.io/contacts",
        newContact
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (idContact, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://66ec5c322b6cf2b89c5e340f.mockapi.io/contacts/${idContact}`
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue;
    }
  }
);
