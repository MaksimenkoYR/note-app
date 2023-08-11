import axios from "axios";
import { AppDispatch } from "../store";
import { User } from "../../models/User";
import { UserSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserSlice.actions.usersFetching())
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    dispatch(UserSlice.actions.usersFetchingSuccess(response.data))
  } catch (e) {
    if (e instanceof Error) {
      dispatch(UserSlice.actions.usersFetchingError(e.message))
    }
  }
}

// export const signInUser = (userData) => {
//   return async function (dispatch, getState) {
//     const response = await
//   }
// }