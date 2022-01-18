import LogoSmall from '../../components/LogoSmall/LogoSmall';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  padding: 1rem 0;
  flex-flow: column nowrap;
  justify-content: center;
  background: ${({ theme }) => theme.colors.redDark};
  & > div {
    flex: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin-right: 1rem;
    & p {
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
  }
  & .logo-small {
    width: 25%;
    height: 50%;
  }

  & .footer__copyright {
    align-self: center;
    font-size: 12px;
  }

  & .footer__links {
    align-self: center;
    margin-left: 1rem;
  }

  & ul {
    padding: 0;
    list-style: none;
  }

  & a {
    font-size: 14px;
    color: white;
    text-decoration: none;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <LogoSmall />
        <div>
          <p>12345 Street St.</p>
          <p>Nowhereville, NE 32999</p>
          <p>(828) 434-7864</p>
        </div>
      </div>
      <div className='footer__links'>
        <ul>
          <li>
            <a href='#'>FRANCHISE INFORMATION</a>
          </li>
          <li>
            <a href='#'>ABOUT</a>
          </li>
          <li>
            <a href='#'>GIFT CARDS</a>
          </li>
          <li>
            <a href='#'>GROCERY PRODUCTS</a>
          </li>
          <li>
            <a href='#'>CAREERS</a>
          </li>
          <li>
            <a href='#'>CONTACT US</a>
          </li>
        </ul>
      </div>
      <p className='footer__copyright'>
        Copyright 2021 Corey Miller. All Rights Reserved
      </p>
    </StyledFooter>
  );
};

export default Footer;
