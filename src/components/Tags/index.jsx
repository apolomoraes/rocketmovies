import { Container } from "./styles";

export function Tags({ background, padding, title, ...rest }) {
  return (
    <Container {...rest} padding={padding} background={background}>
      {title}
    </Container>
  )
}