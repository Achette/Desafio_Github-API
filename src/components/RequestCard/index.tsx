import { responseProps } from "../../types";
import "./style.css";

export const RequestCard = ({ response }: responseProps) => {
  return (
    <div className="request-card-container">
      <div className="request-card-content">
        <img src={response.avatar_url} alt="" />

        <div className="request-card-info">
          <h3>Informações</h3>

          <p>
            <strong>Perfil: </strong>
            {response.url}
          </p>
          <p>
            <strong>Seguidores: </strong>
            {response.followers}
          </p>
          <p>
            <strong>Localidade: </strong>
            {response.location}
          </p>
          <p>
            <strong>Nome: </strong>
            {response.name}
          </p>
        </div>
      </div>
    </div>
  );
};
