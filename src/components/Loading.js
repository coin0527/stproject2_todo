import { PulseLoader } from "react-spinners";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export const Loading = () => {
  return (
    <Wrap>
      <PulseLoader />
    </Wrap>
  );
};
