import { useState, useEffect } from 'react'
import { Container, Content, Title, Nav } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tags } from '../../components/Tags'
import { GiExitDoor } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { useAuth } from '../../hooks/auth';
import { BsTrash } from "react-icons/bs";
import { api } from '../../services/api'
import { Toast } from '../../components/Toast'
import Modal from "react-modal";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

Modal.setAppElement("#root");

export function Preview() {
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function handleRemove() {
    await api.delete(`/notes/${params.id}`);

    Toast().handleSuccess("Nota excluída com sucesso");
    closeModal();
    handleBack();
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();
  }, []);
  return (
    <Container>
      <Header />


      {
        data &&
        <main>
          <Content>

            <Nav>
              <button type='button' className='back' onClick={handleBack} >
                <GiExitDoor />
              </button>

              <button onClick={openModal} >
                <BsTrash />
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal remove note"
                overlayClassName="modal-overlay"
                className="modal-content"
              >
                <h2>Deseja realmente remover o filme/série?</h2>
                <div>
                  <button onClick={handleRemove} >Sim</button>
                  <button onClick={closeModal} >Não</button>
                </div>
              </Modal>
            </Nav>

            <Title>
              <div className="title-rating">

                <h1>{data.title}</h1>
                <Rating width={"2rem"} height={"2rem"} margin={"1rem 0 0"} rating={data.rating} />
              </div>

              <div className="data">
                <div>
                  <img src={avatarUrl} alt="Foto de Perfil" />
                  <p>{`Por ${user.name}`}</p>
                </div>

                <span>
                  <FiClock />
                  {data.created_at}
                </span>
              </div>

              <div className="tags">
                {
                  data.tags && data.tags.map(tag => (
                    < Tags
                      key={String(tag.id)}
                      title={tag.name}
                      padding={".8rem 1.6rem"}
                      background={"#282124"}
                    />
                  ))
                }
              </div>
            </Title>

            <p>
              {data.description}
            </p>
          </Content>
        </main>
      }
    </Container>
  )
}