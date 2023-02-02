import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Container, Content } from "./styles"
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
          <Section title="harry potter">
            ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
          </Section>
          <Section title="harry potter">
            ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
          </Section>
          <Section title="harry potter">
            ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
          </Section>
          <Section title="harry potter">
            ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
          </Section>
          <Section title="harry potter">
            ragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
          </Section>
        </div>
      </Content>

    </Container>
  )
}