import axios from "axios";
import { API_URL } from "../../config/config.tsx";

const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

interface PlaylistRequest {
  name: string;
  description: string;
  isPublic: boolean;
}

interface Track {
  id: string;
  name: string;
  artist: string;
}

export interface PlaylistResponse {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
  Tracks: Track[];
}

interface PlaylistApiResponse {
  success: boolean;
  data: PlaylistResponse[];
}
export const addPlaylistApi = async (
  data: PlaylistRequest
): Promise<PlaylistResponse> => {
  const token = getToken();
  const response = await axios.post(API_URL + "/playlists", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllPlaylistsApi = async (): Promise<PlaylistResponse[]> => {
  try {
    const token = getToken();
    const response = await axios.get<PlaylistApiResponse>(
      API_URL + "/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch playlists");
    }
  } catch {
    throw new Error("Failed to fetch playlists");
  }
};

export const fetchPlaylistById = async (id: string) => {
  const token = getToken();
  try {
    const response = await axios.get(`${API_URL}/playlists/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch {
    throw new Error("Không thể tải playlist.");
  }
};

export const updatePlaylistApi = async (
  id: string,
  data: PlaylistRequest
): Promise<PlaylistResponse> => {
  const token = getToken();
  try {
    const response = await axios.put(`${API_URL}/playlists/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch {
    throw new Error("Không thể cập nhật playlist.");
  }
};

export const deletePlaylistApi = async (id: string): Promise<void> => {
  const token = getToken();

  try {
    const response = await axios.delete(`${API_URL}/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch {
    throw new Error("Error deleting playlist: ");
  }
};
