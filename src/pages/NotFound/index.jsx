import { Link } from "react-router-dom";
import { Container } from "./styles";

export function NotFound() {
  return (
    <Container>
      <div className="notFound">
        <div className="img">
          <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
          <img src="https://assets.codepen.io/5647096/Delorean.png" />
        </div>
        <div className="text">
          <h1>404</h1>
          <h2>PÁGINA NÃO ENCONTRADA</h2>
          <h3>DESEJA VOLTAR?</h3>
          <Link to="/" >SIM</Link>
        </div>
      </div>
    </Container>
  )
}