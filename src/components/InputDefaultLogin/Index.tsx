import { ChangeEvent } from "react";
import StyledTextField from "./Style";

interface InputDefaultLoginProps {
  label: string;
  placeholder: string;
  type?: "text" | "password";
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function InputDefaultLogin({
  label,
  placeholder,
  type = "text",
  required = true,
  onChange,
  value,
}: InputDefaultLoginProps) {
  return (
    <StyledTextField
      label={label}
      variant="standard"
      placeholder={placeholder}
      type={type}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
}

export default InputDefaultLogin;
