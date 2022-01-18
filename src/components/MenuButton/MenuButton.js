import styled from 'styled-components';
const StyledButton = styled.div`
  & button {
    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.tealDark};
    outline: none;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
  }
`;
const MenuButton = () => {
  return (
    <StyledButton className='menu-button'>
      <button>Menu</button>
    </StyledButton>
  );
};

export default MenuButton;
