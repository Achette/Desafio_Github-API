import "./style.css";

type buttonProps = {
  text: string;
  onClick?: () => void;
  type: "submit" | "button"
};

export const Button = ({ text, onClick, type }: buttonProps) => {
  return <button type={`${type}`} onClick={onClick}>{text}</button>;
};
