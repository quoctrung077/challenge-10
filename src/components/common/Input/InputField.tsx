import { Input } from "antd";

interface InputFieldProps {
  id: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField = ({
  id,
  placeholder,
  className = "",
  onChange,
  type = "text",
}: InputFieldProps) => {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      autoFocus={false}
    />
  );
};

export default InputField;
