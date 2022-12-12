import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    sortValue: {
      name: 'Популярное',
      sortProperty: 'rating',
    },
    showPopup: false,
    categoryId: 0,
  },
  reducers: {
    sortType: (state, { payload }) => {
      state.sortValue = payload;
      state.showPopup = false;
    },

    setShowPopup: (state, { payload }) => {
      state.showPopup = !payload;
    },

    setCategoryId: (state, { payload }) => {
      state.categoryId = payload;
    },
  },
});

export const { sortType, setShowPopup, setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
