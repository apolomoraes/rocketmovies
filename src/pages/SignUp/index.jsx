import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom'


export function SignUp() {
  return (

    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />


        <Button title="Cadastrar" />

        <Link to="/" ><FiArrowLeft /> Voltar para o login</Link>
      </Form>
      <Background />

    </Container>

  )
}