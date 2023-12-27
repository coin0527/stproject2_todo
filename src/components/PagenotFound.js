import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 50px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const PageNotFound = () => {
  return <Wrap> 404 Page Not Found</Wrap>;
};
