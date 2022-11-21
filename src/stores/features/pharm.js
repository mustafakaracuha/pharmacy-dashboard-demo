import { createSlice } from "@reduxjs/toolkit";
import { LIST_ITEMS } from "../../data/data";

const initialState = {
  pharmList: LIST_ITEMS,
  newList: [],
  selectedPharm: {},
  isDarkMode : false
};

const pharmSlice = createSlice({
  name: "pharm",
  initialState,
  reducers: {
    selectPharm: (state, action) => {
      state.selectedPharm = action.payload;
    },

    loadList: (state, action) => {
      state.newList = action.payload
    },

    searchPharm: (state, action) => {
      state.newList = state.pharmList.filter(item => item.title.toLowerCase().includes(action.payload));
    },

    toggleMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { selectPharm, searchPharm,loadList,toggleMode } = pharmSlice.actions;
export default pharmSlice.reducer;
