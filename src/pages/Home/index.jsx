import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Container, Content } from "./styles"
import { Rating } from "../../components/Rating"
import { Tags } from "../../components/Tags"
import { FiPlus } from 'react-icons/fi';


export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div className="add">
          <h2>Meus filmes</h2>
          <button>
            <FiPlus />Adicionar filme</button>
        </div>
        <div className="section">
          <Section title="Harry Potter">
            <Rating />
            <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            <div className="tag">
              <Tags title="Harry" />
              <Tags title="Suspense" />
              <Tags title="ficção" />
            </div>
          </Section>
          <Section title="Harry Potter">
            <Rating />
            <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            <div className="tag">
              <Tags title="Harry" />
              <Tags title="Suspense" />
              <Tags title="Ficção" />
            </div>
          </Section>
          <Section title="Harry Potter">
            <Rating />
            <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            <div className="tag">
              <Tags title="Harry" />
              <Tags title="Suspense" />
              <Tags title="Ficção" />
            </div>
          </Section>
          <Section title="Harry Potter">
            <Rating />
            <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            <div className="tag">
              <Tags title="Harry" />
              <Tags title="Suspense" />
              <Tags title="Ficção" />
            </div>
          </Section>
          <Section title="Harry Potter">
            <Rating />
            <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            <div className="tag">
              <Tags title="Harry" />
              <Tags title="Suspense" />
              <Tags title="Ficção" />
            </div>
          </Section>
        </div>
      </Content>

    </Container>
  )
}