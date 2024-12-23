import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  login as loginApi,
  signUp as signUpApi,
} from "../../services/api/authService.tsx";

interface User {
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
  { email: string; token: string },
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const data = await loginApi(email, password);
    return { email, token: data.token };
  } catch (error) {
    console.error("Login error:", error);
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
  } catch (error) {
    console.error("Sign Up error:", error);
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
        state.user = action.payload;
        localStorage.setItem("authToken", action.payload.token);
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
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
