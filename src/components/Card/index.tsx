import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Card = () => {
  const [user, setUser] = React.useState<string>("");

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="user">Encontre um perfil no GitHub</label>
      <input
        name="user"
        type="text"
        placeholder="Usuário Github"
        value={user}
        onChange={(e) => handleChangeUser(e)}
      />
      <Button text={`Encontrar`} type={`submit`} />
    </form>
  );
};
