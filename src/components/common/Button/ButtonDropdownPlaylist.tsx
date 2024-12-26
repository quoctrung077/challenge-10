import { Button, Dropdown } from "antd";
import { useParams } from "react-router-dom";
import type { MenuProps } from "antd";
interface ButtonDropdownProps {
  onMenuClick?: (key: string) => void;
  ariaLabel?: string;
}

const ButtonDropdownPlaylist: React.FC<ButtonDropdownProps> = ({
  onMenuClick,
  ariaLabel,
}) => {
  const { id } = useParams();

  const items: MenuProps["items"] = [
    {
      key: `delete-${id}`,
      label: (
        <Button className="btn__add-artist" role="menuitem">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="btn__icon-plus"
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path d="M12 8.75H4v-1.5h8v1.5z"></path>
          </svg>
          <span
            dir="auto"
            className="Type__TypeElement-sc-goli3j-0 dOtTDl ellipsis-one-line htqz7Vb8mLJvGKTi1vrs"
            data-encore-id="type"
          >
            Delete
          </span>
        </Button>
      ),
    },
    {
      key: `edit-${id}`,
      label: (
        <Button className="btn__add-artist" role="menuitem">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="btn__icon-plus"
          >
            <path d="M11.838.714a2.438 2.438 0 0 1 3.448 3.448l-9.841 9.841c-.358.358-.79.633-1.267.806l-3.173 1.146a.75.75 0 0 1-.96-.96l1.146-3.173c.173-.476.448-.909.806-1.267l9.84-9.84zm2.387 1.06a.938.938 0 0 0-1.327 0l-9.84 9.842a1.953 1.953 0 0 0-.456.716L2 14.002l1.669-.604a1.95 1.95 0 0 0 .716-.455l9.841-9.841a.938.938 0 0 0 0-1.327z"></path>
          </svg>
          <span
            dir="auto"
            className="Type__TypeElement-sc-goli3j-0 dOtTDl ellipsis-one-line htqz7Vb8mLJvGKTi1vrs"
            data-encore-id="type"
          >
            Edit a playlist
          </span>
        </Button>
      ),
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (info) => {
    if (onMenuClick) {
      onMenuClick(info.key);
    }
  };

  return (
    <Dropdown
      menu={{ items, onClick: handleMenuClick }}
      placement="bottomLeft"
      overlayClassName="btn__dropdown"
    >
      <Button
        className="btn__dropdown-playlist"
        aria-label={ariaLabel || "Create playlist or folder"}
      >
        <span aria-hidden="true" className="btn__block">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="btn__icon-dropdown-playlist"
          >
            <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
          </svg>
        </span>
      </Button>
    </Dropdown>
  );
};

export default ButtonDropdownPlaylist;
