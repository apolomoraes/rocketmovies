import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi';


export function SignIn() {
  return (

    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>
      <Background />

    </Container>

  )
}