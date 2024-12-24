import HeaderPlaylist from "../../features/playlist/components/HeaderPlaylist.tsx";
import CardPlaylist from "../../features/playlist/components/CardPlaylist.tsx";
import { useState } from "react";
import { Row, Col } from "antd";

interface Playlist {
  id: number;
  imageUrl: string;
  title: string;
}
const SidebarPlaylist: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/240",
      title: "abc",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/240",
      title: "abc",
    },
  ]);

  const handleAddPlaylist = () => {
    const newPlaylist: Playlist = {
      id: playlists.length + 1,
      imageUrl: "https://via.placeholder.com/240",
      title: `New Playlist ${playlists.length + 1}`,
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const handleShowChange = (newShowState: boolean) => {
    setIsShow(newShowState);
  };

  const handleCollapseChange = (newCollapseState: boolean) => {
    setIsCollapse(newCollapseState);
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
      <div>
        <Row
          gutter={[16, 16]}
          className={`sidebar-playlist__list-grid ${
            isCollapse ? "collapsed" : ""
          } `}
        >
          {playlists.map((playlist) => (
            <Col key={playlist.id} span={isCollapse ? 24 : isShow ? 12 : 8}>
              <CardPlaylist
                imageUrl={playlist.imageUrl}
                title={playlist.title}
                width="160"
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SidebarPlaylist;
