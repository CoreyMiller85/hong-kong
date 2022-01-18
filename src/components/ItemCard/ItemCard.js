import generaltsos from '../../images/general-tsos.jpg';
import styled from 'styled-components';

const StyledItemCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  background: #222;
  & .item-card__image {
    flex: 1;
    width: 100%;

    & img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }

  & .item-card__content {
    flex: 2;
    margin: 0.5rem;

    & h4 {
      margin: 0;
    }

    & p {
      margin: 0;
      font-size: 16px;
    }
  }

  & .item-card__sub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .item-card__sub__spice {
    color: ${({ theme }) => theme.colors.redLight};
  }
  & .item-card__sub__price {
    font-weight: bold;
  }
`;

const ItemCard = ({ image, description, spice, price, title }) => {
  return (
    <StyledItemCard className='item-card'>
      <div className='item-card__image'>
        <img src={image} alt='' />
      </div>
      <div className='item-card__content'>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className='item-card__sub'>
          <div className='item-card__sub__spice'>{spice}</div>
          <div className='item-card__sub__price'>${price}</div>
        </div>
      </div>
    </StyledItemCard>
  );
};

export default ItemCard;
