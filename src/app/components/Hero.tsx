'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ImgHero1 from '../assets/img-carrousel/hero-01.png';
import ImgHero2 from '../assets/img-carrousel/hero-02.png';
import ImgHero3 from '../assets/img-carrousel/hero-03.png';
import ImgHero4 from '../assets/img-carrousel/hero-04.png';
import Background from '../assets/background.jpg';

const fadeUpProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2, ease: 'easeOut' },
};

const Hero: React.FC = () => {
  const images = [ImgHero1, ImgHero2, ImgHero3, ImgHero4];

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <motion.div {...fadeUpProps}>
        <div className="w-full max-w-full m-auto">
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            emulateTouch
            swipeable
            interval={3000}
            transitionTime={500}
            className="carousel"
          >
            {images.map((img, index) => (
              <div className="slide" key={index}>
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full"
                  width={1920}
                  height={800}
                  priority={index === 0}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
