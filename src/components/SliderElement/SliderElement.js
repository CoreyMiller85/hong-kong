import styled from 'styled-components';
const StyledSliderElement = styled.div`
  width: 100%;
  position: relative;

  & img {
    width: 100%;
  }

  & h2 {
    margin: 1rem 0;

    text-align: right;
    text-shadow: 3px 3px 2px black;
    padding: 0.5rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const SliderElement = ({ imageSrc, title }) => {
  return (
    <StyledSliderElement>
      <img src={imageSrc} alt='' />
      <h2>{title}</h2>
    </StyledSliderElement>
  );
};

export default SliderElement;
