import styled from 'styled-components';
import LogoLarge from '../../components/LogoLarge/LogoLarge';
import BG from '../../images/bg.jpg';
const StyledHeroContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${BG});
  background-size: cover;
  background-position: center center;
  width: 100%;
  color: white;
  padding: 2rem;
  & div {
    text-align: center;
  }
`;

const HeroContainer = () => {
  return (
    <StyledHeroContainer>
      <LogoLarge />
      <div>
        <h3>12345 Street St.</h3>
        <h4>Nowhereville, NE 32999</h4>
        <h3>(828) 434-7864</h3>
      </div>
    </StyledHeroContainer>
  );
};

export default HeroContainer;
