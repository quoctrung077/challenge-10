import { Button } from "antd";

interface ButtonHomeProps {
  onClick?: () => void;
  ariaLabel?: string;
}

const ButtonHome: React.FC<ButtonHomeProps> = ({ onClick, ariaLabel }) => {
  return (
    <Button
      className="btn__home"
      type="primary"
      shape="circle"
      onClick={onClick}
      aria-label={ariaLabel || "Home Button"}
    >
      <span aria-hidden="true" className="btn__block">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="btn__icon-home"
        >
          <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
        </svg>
      </span>
    </Button>
  );
};

export default ButtonHome;
