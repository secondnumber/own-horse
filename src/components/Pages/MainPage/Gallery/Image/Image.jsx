import React from 'react';
import './Image.scss';

const Image = (props) => {
  return (
    <div className={props.position}>
      <img className='image' src={props.galleryImages} />
    </div>
  );
};

export default Image;
