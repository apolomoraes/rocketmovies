import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { GiExitDoor } from "react-icons/gi";
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="">
          <GiExitDoor />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/apolomoraes.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input required placeholder="Nome" type="text" icon={FiUser} />
        <Input required placeholder="E-mail" type="email" icon={FiMail} />
        <Input required placeholder="Senha atual" type="password" icon={FiLock} />
        <Input required placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>

    </Container>

  )
}