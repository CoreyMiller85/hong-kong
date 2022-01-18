import logoLarge from '../../images/HK-large.svg';
import styled from 'styled-components';

const StyledLogoLarge = styled.div`
  display: flex;
  height: 12rem;
  justify-content: center;
  align-items: center;
  width: auto;
  & img {
    width: auto;
    height: 100%;
  }
`;
const LogoLarge = () => {
  return (
    <StyledLogoLarge>
      <img src={logoLarge} alt='' />
    </StyledLogoLarge>
  );
};

export default LogoLarge;
