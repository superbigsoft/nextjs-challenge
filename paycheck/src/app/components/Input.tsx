"use client";
import { Input as AntInput } from "antd";

interface InputProps {
  onChange: (val: string) => void;
  [key: string]: any; // Allow additional props
}
export default function Input({ onChange, ...rest }: InputProps) {
  return (
    <AntInput onChange={(e) => onChange(e.target.value)} onBlur={(e) => onChange(e.target.value.trim())} {...rest} />
  );
}
