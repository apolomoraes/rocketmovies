import { Container, Form, NameEvaluation, Tags, TextArea } from './styles'
import { Header } from '../../components/Header'
import { GiExitDoor, GiNotebook, GiPencil, GiBinoculars, GiIgloo } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { MovieTags } from '../../components/MovieTags';
import { useState } from 'react';
import { Toast } from '../../components/Toast';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';


export function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState();
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);

  const [showLoading, setShowLoading] = useState(false);


  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    if (newTag.length === 0 || newTag === " ") {
      return Toast().handleInfo("Preencha o campo para adicionar uma tag");
    }

    setTags(prevState => [...prevState, newTag]);

    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return Toast().handleInfo("Digite o nome do filme ou série")
    }

    if (!rating) {
      return Toast().handleInfo("Adicione uma avaliação");
    }

    if (rating > 5 || rating < 0) {
      return Toast().handleInfo("Insira uma avaliação entre 0 e 5");
    }

    if (newTag) {
      return Toast().handleInfo("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar");
    }

    if (tags.length === 0) {
      return Toast().handleInfo("Adicione pelo menos uma tag");
    }

    setShowLoading(true);
    await api.post("/notes", {
      title,
      description,
      tags,
      rating
    });

    setShowLoading(false);
    Toast().handleSuccess("Nota criada com sucesso")
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <button type='button' onClick={handleBack} >
              <GiExitDoor />
            </button>
            <h1>Novo filme</h1>
          </header>

          <NameEvaluation>
            <Input
              placeholder="Título"
              icon={GiPencil}
              onChange={e => setTitle(e.target.value)}
            />
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
            <Textarea
              placeholder="Descrição"
              icon={GiBinoculars}
              onChange={e => setDescription(e.target.value)}
            />
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
            <Button
              title="Salvar"
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>
      {showLoading && <Loading />}
    </Container>

  )
}