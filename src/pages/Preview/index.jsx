import { useState } from 'react'
import { Container, Content, Title, Nav } from './styles'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tags } from '../../components/Tags'
import { GiExitDoor } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { BsTrash } from "react-icons/bs";



export function Preview() {
  const { user } = useAuth();
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <Nav>
            <Link className='link' to="/" >
              <GiExitDoor />
            </Link>

            <button>
              <BsTrash />
            </button>
          </Nav>

          <Title>
            <div className="title-rating">

              <h1>Harry Potter</h1>
              <Rating width={"2rem"} height={"2rem"} margin={"1rem 0 0"} rating={1} />
            </div>

            <div className="data">
              <div>
                <img src="https://github.com/apolomoraes.png" alt="Foto de Perfil" />
                <p>{`Por ${user.name}`}</p>
              </div>

              <span>
                <FiClock />
                {user.created_at}
              </span>
            </div>

            <div className="tags">
              <Tags title="hp" padding={".8rem 1.6rem"} background={"#282124"} />
              <Tags title="Magia" padding={".8rem 1.6rem"} background={"#282124"} />
              <Tags title="Harry" padding={".8rem 1.6rem"} background={"#282124"} />
            </div>
          </Title>

          <p>
            Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.
            Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.
            Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.
            Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.
            Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.
          </p>
        </Content>
      </main>

    </Container>
  )
}