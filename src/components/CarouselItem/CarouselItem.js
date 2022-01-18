import styled from 'styled-components';

const StyledItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
`;

const CarouselItem = ({ children, width }) => {
  return (
    <StyledItem className='carousel__item' style={{ width: width }}>
      {children}
    </StyledItem>
  );
};

export default CarouselItem;
