import { FiSearch } from 'react-icons/fi';
import { Container, Profile } from "./styles"
import { Input } from "../Input"
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'


export function Header() {

  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>


      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />


      <Profile>
        <div>
          <strong>Apolo Moraes</strong>
          <a
            className="back"
            onClick={signOut}
          >
            sair</a>
        </div>

        <Link to="/profile" >
          <img src="https://github.com/apolomoraes.png" alt="Foto de Perfil" />
        </Link>
      </Profile>
    </Container>
  )
}