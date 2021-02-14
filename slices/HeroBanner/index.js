import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Image from 'next/image';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const MySlice = ({ slice }) => (
  <section style={section}>
    {slice.primary.title ? (
      <div className='title'>
        <RichText render={slice.primary.title} />
      </div>
    ) : (
      <h2 style={h2}>Template slice, update me!</h2>
    )}
    {slice.primary.description ? (
      <div>
        <RichText render={slice.primary.description} />
      </div>
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}
    <Link className='btn btn-primary' href={slice.primary.buttonLink}>
      <a>{slice.primary.button}</a>
    </Link>
    <div className='image-wrapper'>
      {console.log(slice.primary.image.url)}
      <img src={slice.primary.image.url} alt='Picture of the author' />
    </div>
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
