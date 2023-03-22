import { Container, Form, NameEvaluation, Tags, TextArea } from './styles'
import { Header } from '../../components/Header'
import { GiExitDoor, GiNotebook, GiPencil, GiBinoculars } from "react-icons/gi";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { MovieTags } from '../../components/MovieTags';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Toast } from '../../components/Toast';


export function Create() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [rating, setRating] = useState();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

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
            <Input
              placeholder="Sua nota (de 0 a 5)"
              icon={GiNotebook}
              type="number"
              min="0"
              max="5"
              onChange={e => setRating(e.target.value)}
            />
          </NameEvaluation>

          <TextArea>
            <Textarea placeholder="Observações" icon={GiBinoculars} />
          </TextArea>

          <h2>Marcadores</h2>
          <Tags>
            {tags.map((tag, index) => (
              <MovieTags
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
            }
            <MovieTags
              isNew
              placeholder="Nova tag"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Tags>

          <div className='button'>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>

  )
}