import { FiSearch } from 'react-icons/fi';
import { Container, Profile } from "./styles"
import { Input } from "../Input"
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Header({ filterMovies }) {
  const { user, signOut } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>


      <input
        type="text"
        placeholder='Pesquisar pelo título'
        onChange={filterMovies}
      />


      <Profile>
        <div>
          <strong>{user.name}</strong>
          <a
            className="back"
            onClick={signOut}
          >
            sair</a>
        </div>

        <Link to="/profile" >
          <img src={avatarUrl} alt="Foto de Perfil" />
        </Link>
      </Profile>
    </Container>
  )
}