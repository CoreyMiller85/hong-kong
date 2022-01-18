import LogoSmall from '../components/LogoSmall/LogoSmall';
import MenuButton from '../components/MenuButton/MenuButton';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  height: 4rem;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};

  & .menu-button {
    margin-right: 1rem;
  }
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <LogoSmall />
      <MenuButton />
    </StyledNavBar>
  );
};

export default Navbar;
