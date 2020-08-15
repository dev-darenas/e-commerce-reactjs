import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./slider-animations.scss";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const SliderContainer = () => {
  const content = [
    {
      title: 'Laia Swimwear',
      image: '/images/bg01.jpeg',
      description: 'New style of Bikinis'
    },
    {
      title: 'Listos para el verano?',
      image: '/images/bg02.jpeg',
      description: 'Bikinis Hechos con amor'
    },{
      title: 'Laia',
      image: '/images/bg03.jpeg',
      description: 'Siéntete sexy tomando el sol'
    }
  ];

  const images = [
    {
      original: '/images/bg01.jpeg',
    },
    {
      original: '/images/bg02.jpeg',
    },
    {
      original: '/images/bg03.jpeg',
    },
  ];

  return (
    <div>
      <BrowserView>
        <Slider autoplay={3000} >
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner has-text-centered">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <br />
                <a className="button is-outlined is-large" href='/store'>Comprar Ahora</a>
              </div>
            </div>
          ))}
        </Slider>
      </BrowserView>
      <MobileView>
        <ImageGallery
          items={images}
          showThumbnails={false}
        />
      </MobileView>
    </div>
  )
}

export default SliderContainer;
