import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPlaylistApi,
  getAllPlaylistsApi,
  updatePlaylistApi,
  deletePlaylistApi,
} from "../../services/api/playlistService";
import { AxiosError } from "axios";

interface Playlist {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface PlaylistState {
  playlists: Playlist[];
  loading: boolean;
  error: string | null;
}

const initialState: PlaylistState = {
  playlists: [],
  loading: false,
  error: null,
};

export const addPlaylist = createAsyncThunk(
  "playlist/addPlaylist",
  async (
    {
      name,
      description,
      isPublic,
      token,
    }: { name: string; description: string; isPublic: boolean; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await addPlaylistApi(
        { name, description, isPublic },
        token
      );
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(
        axiosError.response?.data || "Không thể thêm playlist"
      );
    }
  }
);

// Lấy All Playlist
export const fetchPlaylists = createAsyncThunk(
  "playlist/fetchPlaylists",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await getAllPlaylistsApi(token);
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(
        axiosError.response?.data || "Không thể lấy playlist"
      );
    }
  }
);

export const updatePlaylist = createAsyncThunk(
  "playlist/updatePlaylist",
  async (
    {
      id,
      name,
      description,
      isPublic,
      token,
    }: {
      id: string;
      name: string;
      description: string;
      isPublic: boolean;
      token: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await updatePlaylistApi(
        id,
        { name, description, isPublic },
        token
      );
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(
        axiosError.response?.data || "dont update playlist"
      );
    }
  }
);

export const deletePlaylist = createAsyncThunk(
  "playlist/deletePlaylist",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      await deletePlaylistApi(id);
      return { id };
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(
        axiosError.response?.data || "Không thể xoá playlist"
      );
    }
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.loading = false;
        state.playlists = action.payload;
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addPlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPlaylist.fulfilled, (state, action) => {
        state.loading = false;
        state.playlists.push(action.payload);
      })
      .addCase(addPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updatePlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePlaylist.fulfilled, (state, action) => {
        state.loading = false;

        const updatedPlaylist = action.payload;
        const index = state.playlists.findIndex(
          (playlist) => playlist.id === updatedPlaylist.id
        );
        if (index !== -1) {
          state.playlists[index] = updatedPlaylist;
        }
      })
      .addCase(updatePlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deletePlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePlaylist.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.playlists = state.playlists.filter(
          (playlist) => playlist.id !== id
        );
      })
      .addCase(deletePlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default playlistSlice.reducer;
