import { Input } from "antd";

interface InputFieldProps {
  id: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
}

const InputField = ({
  id,
  placeholder,
  className = "",
  onChange,
  type = "text",
  value,
}: InputFieldProps) => {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      autoFocus={false}
      value={value}
    />
  );
};

export default InputField;
