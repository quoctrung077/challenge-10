import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  login as loginApi,
  signUp as signUpApi,
} from "../../services/api/authService.tsx";

interface User {
  id: string;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}

export const login = createAsyncThunk<
  { email: string; token: string; user: User },
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const data = await loginApi(email, password);
    if (data && data.user && data.user.id) {
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data.user.id);
      return { email: data.user.email, token: data.token, user: data.user };
    } else {
      return rejectWithValue("User data is invalid");
    }
  } catch {
    return rejectWithValue("Login failed");
  }
});

export const signUp = createAsyncThunk<
  { email: string; token: string },
  { email: string; password: string; name: string },
  { rejectValue: string }
>("auth/signUp", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const data = await signUpApi(email, password, name);
    return { email, token: data.token };
  } catch {
    return rejectWithValue("Sign Up failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    token: localStorage.getItem("authToken") || null,
    error: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("authToken", action.payload.token);
        localStorage.setItem("userId", action.payload.user.id);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          id: "",
          email: action.payload.email,
          token: action.payload.token,
        };
        state.token = action.payload.token;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
