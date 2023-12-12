import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Logo = styled.div`
  line-height: 50px;
  margin-left: 30px;
  font-size: 30px;
  font-weight: 700;
`;
const ItemWrap = styled.ul`
  display: flex;
  width: 100%;
  max-width: 150px;
  justify-content: space-between;
  li {
    margin-right: 50px;
    line-height: 50px;
  }
`;
const Item1 = styled.li``;
const Item2 = styled.li``;

export const Header = () => {
  return (
    <Wrap>
      <Link to={"/todo"}>
        <Logo> Todo </Logo>
      </Link>

      <ItemWrap>
        <Item1> one </Item1>
        <Item2> two </Item2>
      </ItemWrap>
    </Wrap>
  );
};
