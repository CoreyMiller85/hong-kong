import styled from 'styled-components';
import logoSmall from '../../images/HK-small.svg';
const StyledSmallLogo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  margin-left: 1rem;
  height: 100%;
  justify-content: flex-start;
  & img {
    height: 100%;
    width: auto;
    padding: 0.5rem 0;
  }
`;
const LogoSmall = () => {
  return (
    <StyledSmallLogo className='logo-small'>
      <img src={logoSmall} alt='' />
    </StyledSmallLogo>
  );
};

export default LogoSmall;
