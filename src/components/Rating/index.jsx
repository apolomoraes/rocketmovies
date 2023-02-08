import { AiOutlineStar } from "react-icons/ai";
import { Container } from "./styles";

export function Rating({ width, height, margin }) {
  return (
    <Container width={width} height={height} margin={margin} >

      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />

    </Container>

  )
}