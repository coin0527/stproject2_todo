import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 100%;
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

export const Header = () => {
  return (
    <Wrap>
      <Link to={"/todo"}>
        <Logo> Todo </Logo>
      </Link>

      <ItemWrap>
        <Link to={"/"}>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              fontSize: "24px",
              marginLeft: "100px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          />
        </Link>
      </ItemWrap>
    </Wrap>
  );
};
