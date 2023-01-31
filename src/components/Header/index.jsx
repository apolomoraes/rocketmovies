
import { Container, Profile } from "./styles"

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      {/* <Input /> */}

      <Profile>
        <div>
          <strong>Apolo Moraes</strong>
          <a className="back" href="#">sair</a>
        </div>

        <a href="#">
          <img src="https://github.com/apolomoraes.png" alt="Foto de Perfil" />
        </a>
      </Profile>
    </Container>
  )
}