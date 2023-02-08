import { Container, Form, NameEvaluation, Tags, TextArea } from './styles'
import { Header } from '../../components/Header'
import { GiExitDoor, GiNotebook, GiPencil, GiBinoculars } from "react-icons/gi";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { MovieTags } from '../../components/MovieTags';
import { Link } from 'react-router-dom'



export function Create() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/" >
              <GiExitDoor />
            </Link>
            <h1>Novo filme</h1>
          </header>

          <NameEvaluation>
            <Input placeholder="Título" icon={GiPencil} />
            <Input placeholder="Sua nota (de 0 a 5)" icon={GiNotebook} type="number" min="0" max="5" />
          </NameEvaluation>

          <TextArea>
            <Textarea placeholder="Observações" icon={GiBinoculars} />
          </TextArea>

          <h2>Marcadores</h2>
          <Tags>
            <MovieTags value="React" />
            <MovieTags isNew placeholder="Nova tag" />
          </Tags>

          <div className='buttons'>
            <button className='delete'>Excluir filme</button>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>

  )
}