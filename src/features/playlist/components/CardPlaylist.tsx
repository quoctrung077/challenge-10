import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Text } = Typography;
interface PlaylistCardProps {
  title: string;
  width: string;
  onClick: () => void;
}

const CardPlaylist: React.FC<PlaylistCardProps> = ({
  title,
  width,
  onClick,
}) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="playlist cover"
          src="https://via.placeholder.com/240"
          className="playlist-cover"
        />
      }
      style={{ width }}
      className="card-playlist"
      onClick={onClick}
    >
      <Card.Meta title={title} />
      <Text type="secondary" style={{ display: "block" }}></Text>
    </Card>
  );
};

export default CardPlaylist;
