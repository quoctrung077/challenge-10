import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import React from "react";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button className="btn__add-artist" role="menuitem">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="btn__icon-plus"
        >
          <path d="M2 0v2H0v1.5h2v2h1.5v-2h2V2h-2V0H2zm11.5 2.5H8.244A5.482 5.482 0 0 0 7.966 1H15v11.75A2.75 2.75 0 1 1 12.25 10h1.25V2.5zm0 9h-1.25a1.25 1.25 0 1 0 1.25 1.25V11.5zM4 8.107a5.465 5.465 0 0 0 1.5-.593v5.236A2.75 2.75 0 1 1 2.75 10H4V8.107zM4 11.5H2.75A1.25 1.25 0 1 0 4 12.75V11.5z"></path>
        </svg>
        <span
          dir="auto"
          className="Type__TypeElement-sc-goli3j-0 dOtTDl ellipsis-one-line htqz7Vb8mLJvGKTi1vrs"
          data-encore-id="type"
        >
          Create a artists
        </span>
      </Button>
    ),
  },
];

interface ButtonDropdownProps {
  onClick?: () => void;
  ariaLabel?: string;
}
const ButtonDropdown: React.FC<ButtonDropdownProps> = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomLeft"
      overlayClassName="btn__dropdown"
    >
      <Button
        className="btn__dropdown-add"
        aria-label="Create playlist or folder"
        data-encore-id="buttonTertiary"
      >
        <span aria-hidden="true" className="btn__block">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="btn__icon-add"
          >
            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
          </svg>
        </span>
      </Button>
    </Dropdown>
  );
};

export default ButtonDropdown;
