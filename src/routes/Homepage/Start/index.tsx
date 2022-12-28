import React from "react";
import { Card, RequestCard } from "../../../components";
import { ApiGithub } from "../../../services/api";
import "./style.css";

export const Start = () => {
  const [data, setData] = React.useState();
  const [user, setUser] = React.useState<string>("");
  const [error, setError] = React.useState(false);

  const captureUser = (user: string) => {
    setUser(user);
  };

  const fetchUser = React.useCallback(async () => {
    if (user !== "") {
      setError(false);
      await ApiGithub.getByUserName(user)
        .then((response) => response.data)
        .then((res) => setData(res))
        .catch((error) => setError(true));
    }
  }, [user]);

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="start-container">
      <div className="start-content">
        <Card captureUser={captureUser} />
        {data && !error ? <RequestCard response={data} /> : null}
        <span className="error-message">{error && <p>Erro ao buscar usuário</p>}</span>
      </div>
    </div>
  );
};
