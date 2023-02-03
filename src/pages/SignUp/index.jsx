import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';


export function SignUp() {
  return (

    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiMail} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />


        <Button title="Cadastrar" />

        <a href="#"><FiArrowLeft /> Voltar para o login</a>
      </Form>
      <Background />

    </Container>

  )
}