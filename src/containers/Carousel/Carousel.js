import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const StyledCarousel = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;

  & .carousel__inner {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    transition: transform 1s;
  }

  & .carousel__indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;

    & > button {
      margin: 5px;
      background: gray;
      border: 2px solid black;
      outline: none;
      border-radius: 50%;
      height: 10px;
      width: 10px;
      &.active {
        background: black;
        color: #fff;
      }
    }
  }
`;

const Carousel = ({ children, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <StyledCarousel
      {...handlers}
      className='carousel'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className='carousel__inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className='carousel__indicators'>
        {/* <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button> */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
        {/* <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            Next
          </button> */}
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
