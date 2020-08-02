import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const SliderContainer = () => {
  const content = [
    {
      title: 'some',
      image: '/images/bg01.jpeg',
      description: '',
      button: 'button'
    },
    {
      title: 'some',
      image: '/images/bg02.jpeg',
      description: '',
      button: 'button'
    },{
      title: 'some',
      image: '/images/bg03.jpeg',
      description: '',
      button: 'button'
    }
  ];

  return (
    <Slider autoplay={3000}>
      {content.map((item, index) => (
        <div
          key={index}
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="center" />
        </div>
      ))}
    </Slider>
  )
}

export default SliderContainer;
