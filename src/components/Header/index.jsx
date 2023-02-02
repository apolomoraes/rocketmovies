import { FiSearch } from 'react-icons/fi';
import { Container, Profile } from "./styles"
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>


      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />


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