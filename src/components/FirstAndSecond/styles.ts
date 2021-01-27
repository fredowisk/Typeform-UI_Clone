import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentOffset = styled(motion.div)`
    width: 100%;
    height: 100%;
`;

export const Content = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  border-radius: 4px;
  border: 4px solid #fff;
`;

export const LeftSideContent = styled(motion.div)`
    width: 50%;
    height: 100%;
    background: #7dbb91;
`;

export const RightSideContent = styled.div`
    width: 50%;
    height: 100%;
`;

export const RightSideImage = styled(motion.div)`
      background: #7dbb91;
      width: 80%;
      height: 100%;
`;
