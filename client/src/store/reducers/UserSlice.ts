import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";


interface UserState {
  users: User[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.isLoading = true
      state.users.push(action.payload)
    },
    usersFetching(state,) {
      state.isLoading = true
    },
    usersFetchingSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false
      state.error = ''
      state.users.push(...action.payload)
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default UserSlice.reducer;