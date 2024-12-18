import React from "react";
import { Button, ButtonProps } from "antd";

interface ButtonBackProps extends ButtonProps {
  onClick?: () => void;
}

const ButtonBack: React.FC<ButtonBackProps> = ({ onClick, ...rest }) => {
  return (
    <Button className="btn__back" onClick={onClick} {...rest}>
      <span aria-hidden="true" className="btn__block">
        <svg
          width="24"
          height="24"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="btn__icon-back"
        >
          <path d="M15.957 2.793a1 1 0 0 1 0 1.414L8.164 12l7.793 7.793a1 1 0 1 1-1.414 1.414L5.336 12l9.207-9.207a1 1 0 0 1 1.414 0z"></path>
        </svg>
      </span>
    </Button>
  );
};

export default ButtonBack;
