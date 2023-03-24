import { Header } from "../../components/Header"
import { useNavigate } from "react-router-dom"
import { Section } from "../../components/Section"
import { Container, Content } from "./styles"
import { Rating } from "../../components/Rating"
import { Tags } from "../../components/Tags"
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { api } from "../../services/api"


export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function filterMovies(e) {
    setSearch(e.target.value)
  }

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data)
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header filterMovies={filterMovies} />

      <Content>
        <div className="add">
          <h2>Meus filmes</h2>
          <Link to="/create" className="button">
            <FiPlus />Adicionar filme
          </Link>
        </div>
        <div className="section">
          {
            notes.map(note => (
              <Section
                key={String(note.id)}
                onClick={() => handlePreview(note.id)}
                title={note.title}>
                <Rating width={"1.2rem"} height={"1.2rem"} rating={note.rating} />
                <p>{note.description}</p>
                <div className="tag">

                  {note.noteTags && note.noteTags.map(tag => (
                    <Tags
                      key={String(tag.id)}
                      title={tag.name}
                      padding={".5rem 1.6rem"}
                      background={"#312E38"}
                    />
                  ))
                  }

                </div>
              </Section>
            ))
          }
        </div>
      </Content>

    </Container>
  )
}