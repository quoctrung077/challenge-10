import React, { useState, useEffect } from "react";
import { Row, Col, Spin, message } from "antd";
import HeaderPlaylist from "../../features/playlist/components/HeaderPlaylist.tsx";
import CardPlaylist from "../../features/playlist/components/CardPlaylist.tsx";
import { useNavigate } from "react-router-dom";
import {
  addPlaylistApi,
  getAllPlaylistsApi,
} from "../../services/api/playlistService";

interface Playlist {
  id: string;
  name: string;
}

const SidebarPlaylist: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylists = async () => {
      setLoading(true);
      try {
        const response = await getAllPlaylistsApi();
        setPlaylists(response);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  const handleAddPlaylist = async () => {
    setLoading(true);
    const newPlaylistData = {
      name: `New Playlist ${playlists.length + 1}`,
      description: "Mô tả mặc định cho playlist",
      isPublic: true,
    };

    try {
      const newPlaylistResponse = await addPlaylistApi(newPlaylistData);

      const newPlaylist: Playlist = {
        id: String(newPlaylistResponse.id),
        name: newPlaylistResponse.name,
      };

      setPlaylists([newPlaylist, ...playlists]);
      message.success("Playlist added successfully!");
    } finally {
      setLoading(false);
    }
  };

  const handleShowChange = (newShowState: boolean) => {
    setIsShow(newShowState);
  };

  const handleCollapseChange = (newCollapseState: boolean) => {
    setIsCollapse(newCollapseState);
  };

  const handleCardClick = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`);
  };

  return (
    <div
      className={`sidebar-playlist ${isShow ? "show" : ""} ${
        isCollapse ? "collapsed" : ""
      }`}
    >
      <HeaderPlaylist
        isShow={isShow}
        isCollapse={isCollapse}
        onShowChange={handleShowChange}
        onCollapseChange={handleCollapseChange}
        handleAddPlaylist={handleAddPlaylist}
      />
      <div className="sidebar-playlist__list">
        {loading ? (
          <Spin size="large" />
        ) : (
          <Row
            gutter={[16, 16]}
            className={`sidebar-playlist__list-grid ${
              isCollapse ? "collapsed" : ""
            }`}
          >
            {playlists.map((playlist) => (
              <Col key={playlist.id} span={isCollapse ? 24 : isShow ? 12 : 8}>
                <CardPlaylist
                  title={playlist.name}
                  width="160"
                  onClick={() => handleCardClick(playlist.id)}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default SidebarPlaylist;
