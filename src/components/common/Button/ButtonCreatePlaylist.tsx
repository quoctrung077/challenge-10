import { Button } from "antd";

interface PlaylistCardProps {
  handleAddPlaylist: () => void;
  className: string;
}

const ButtonCreateplaylist: React.FC<PlaylistCardProps> = ({
  handleAddPlaylist,
  className,
}) => {
  return (
    <Button className={className} onClick={handleAddPlaylist}>
      <span aria-hidden="true" className="btn__block">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="btn__icon-create-playlist"
        >
          <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
        </svg>
      </span>
    </Button>
  );
};

export default ButtonCreateplaylist;
