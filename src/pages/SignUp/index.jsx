import { useState } from 'react';
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'
import { Toast } from '../../components/Toast'
import { api } from "../../services/api"


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return Toast().handleInfo("Preencha todos os campos")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        Toast().handleSuccess("Usuário cadastrado com sucesso");
        navigate(-1);
      })
      .catch(error => {
        if (error.response) {
          Toast().handleError(error.response.data.message);
        } else {
          Toast().handleError("Não foi possível cadastrar");
        }
      })
  }

  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />


        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/" ><FiArrowLeft /> Voltar para o login</Link>
      </Form>
      <Background />

    </Container>

  )
}