import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
`;

export const Copyright = () => {
  return <Wrap>&copy; eden27</Wrap>;
};
