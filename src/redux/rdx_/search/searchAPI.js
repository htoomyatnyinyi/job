import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_HOST = "http://localhost:8080";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (searchTerm) => {
    const response = await axios.get(`${API_HOST}/search?q=${searchTerm}`);
    // console.log(response);
    return response.data;
  }
);
