import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Container } from "./styles";

export function Rating({ width, height, margin, rating }) {
  return (
    <Container width={width} height={height} margin={margin} >

      {rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}

    </Container>

  )
}