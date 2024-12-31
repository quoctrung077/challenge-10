import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

type CustomButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type: string;
  htmlType: string;
  className?: string;
} & AntdButtonProps;

const CustomButton = ({
  text,
  onClick,
  disabled,
  type,
  htmlType,
  block = true,
  className = "",
  ...rest
}: CustomButtonProps) => {
  return (
    <AntdButton
      type={type}
      htmlType={htmlType}
      block={block}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span className="btn__text">{text}</span>
    </AntdButton>
  );
};

export default CustomButton;
