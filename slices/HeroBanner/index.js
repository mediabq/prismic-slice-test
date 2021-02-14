import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const StyledHeroBanner = styled.section`
  display: flex;
`;

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const HeroBanner = ({ slice }) => (
  <StyledHeroBanner>
    <div className='text-left'>
      {slice.primary.title ? (
        <div className='title'>
          <RichText render={slice.primary.title} />
        </div>
      ) : (
        <h2>Template slice, update me!</h2>
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
    </div>
    <div className='image-wrapper'>
      <Image src={slice.primary.image.url} layout='fill' />
    </div>
  </StyledHeroBanner>
);

HeroBanner.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HeroBanner;
