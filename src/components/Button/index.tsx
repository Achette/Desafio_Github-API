import { buttonProps } from "../../types";
import "./style.css";



export const Button = ({ text, onClick, type }: buttonProps) => {
  return <button type={`${type}`} onClick={onClick}>{text}</button>;
};
