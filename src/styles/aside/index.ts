import styled from 'styled-components';
import asideImage from '../../assets/images/aside.png';

export const Aside = styled.div`
  width: 20vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 20vw;
  background-image: url(${asideImage});
  background-position: left top;
  background-size: 100% 100%;
  border: none;

  @media (max-width: 1024px) {
    width: 40vw;
    left: 0;
  }
`;
