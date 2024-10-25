import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const loginSlice = createSlice({
  name: 'auth', 
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.accessToken; 
      localStorage.setItem('token', action.payload.accessToken); 
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token'); 
    },
  },
});


export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
