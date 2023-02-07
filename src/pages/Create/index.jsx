import { Container, Form, NameEvaluation } from './styles'
import { Header } from '../../components/Header'
import { GiExitDoor, GiNotebook, GiPencil } from "react-icons/gi";
import { Input } from '../../components/Input';


export function Create() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <a href="">
              <GiExitDoor />
            </a>
            <h1>Novo filme</h1>
          </header>

          <NameEvaluation>
            <Input placeholder="Título" icon={GiPencil} />
            <Input placeholder="Sua nota (de 0 a 5)" icon={GiNotebook} />
          </NameEvaluation>


        </Form>
      </main>
    </Container>

  )
}