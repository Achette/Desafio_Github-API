import { useNavigate } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleGoToStartPage = () => {
    navigate(`/start`);
  };

  return (
    <section className="home-container">
      <h2>Desafio Github API</h2>
      <p>DevSuperior - Escola de programação</p>
      <button
        title="Clique para começar!"
        onClick={() => handleGoToStartPage()}
      >
        Começar
      </button>
    </section>
  );
};
