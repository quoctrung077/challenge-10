import { List, Avatar, Typography, Button, Spin } from "antd";
import ModalPlaylist from "../features/playlist/components/ModalPlaylist.tsx";
import {
  fetchPlaylistById,
  PlaylistResponse,
} from "../services/api/playlistService.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const { Text } = Typography;
const ViewPlaylistId = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<PlaylistResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getPlaylistDetails = async () => {
      setLoading(true);
      try {
        const response = await fetchPlaylistById(id!);

        setPlaylist(response.data);
      } catch {
        setError("Failed to fetch playlist details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getPlaylistDetails();
    }
  }, [id]);

  if (loading) return <Spin size="large" />;
  if (error) return <div>{error}</div>;

  const isCreator = userId === playlist?.userId;
  return (
    <div className="view-playlist">
      <div className="view-playlist__header">
        <Avatar
          className="view-playlist__avatar"
          size={232}
          src="https://via.placeholder.com/240"
        />
        <div className="view-playlist__wrapper-title">
          <Text className=" view-playlist__title">Playlist</Text>
          <Text className="view-playlist__title--font-size" strong>
            {playlist?.name?.trim()
              ? playlist.name
              : "Tên playlist không có sẵn"}
          </Text>
          <Text className=" view-playlist__title">
            Playlist - 1 Songs, 4:26 mins
          </Text>
        </div>
      </div>

      <div className="view-playlist__play">
        <Button className="btn__play">
          <span className="btn__Inne">
            <span aria-hidden="true" className="btn__block">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="btn__icon-play"
              >
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            </span>
          </span>
        </Button>
        {isCreator && <ModalPlaylist />}
      </div>

      {/* Song List */}
      <List />
    </div>
  );
};

export default ViewPlaylistId;
