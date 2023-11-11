"use client"

import React, { useState } from 'react';
import './MyCarousel.scss'

const Carousel = ({ items, active }: any) => {
  const [state, setState] = useState({
    active,
    direction: '',
  });

  const moveLeft = () => {
    const newActive = state.active - 1;
    setState({
      ...state,
      active: newActive < 0 ? items.length - 1 : newActive,
      direction: 'left',
    });
  };

  const moveRight = () => {
    const newActive = (state.active + 1) % items.length;
    setState({
      ...state,
      active: newActive,
      direction: 'right',
    });
  };

  const generateItems = () => {
    const itemsArray = [];
    let level;
    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = state.active - i;
      itemsArray.push(<Item key={index} id={items[index]} level={level} />);
    }
    return itemsArray;
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
      <div>
        {generateItems()}
      </div>
    </div>
  );
};

const Item = ({ id, level }: any) => {
  const className = `item level${level}`;

  return (
    <div className={className}>
      {id}
    </div>
  );
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MyCarousel = () => {
  return (
    <div>
      <Carousel items={items} active={0} />
    </div>
  );
}

export default MyCarousel;