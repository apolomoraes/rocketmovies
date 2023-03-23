import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Container, Content } from "./styles"
import { Rating } from "../../components/Rating"
import { Tags } from "../../components/Tags"
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"


export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data)
    }
  })

  return (
    <Container>
      <Header />

      <Content>
        <div className="add">
          <h2>Meus filmes</h2>
          <Link to="/create" className="button">
            <FiPlus />Adicionar filme
          </Link>
        </div>
        <div className="section">
          <Section title="Harry Potter">
            <Rating width={"1.2rem"} height={"1.2rem"} rating={5} />
            <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            <div className="tag">
              {
                tags && tags.map((tag) => (
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
        </div>
      </Content>

    </Container>
  )
}