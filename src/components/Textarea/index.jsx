import { Container } from './styles';

export function Textarea({ icon: Icon, value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}