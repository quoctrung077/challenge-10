import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Text } = Typography;
interface PlaylistCardProps {
  imageUrl: string;
  title: string;
  width: string;
}

const CardPlaylist: React.FC<PlaylistCardProps> = ({
  imageUrl,
  title,
  width,
}) => {
  return (
    <Card
      hoverable
      cover={
        <img alt="playlist cover" src={imageUrl} className="playlist-cover" />
      }
      style={{ width }}
      className="card-playlist"
    >
      <Card.Meta title={title} />
      <Text type="secondary" style={{ display: "block" }}></Text>
    </Card>
  );
};

export default CardPlaylist;
