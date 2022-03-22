import React from 'react';
import Image from 'next/image';
import heroImage from '@images/hero-2.jpg';
import HeroForm from './HeroForm';

const Hero = () => (
  <section className="relative">
    <div className="w-full leading-[0] 2xl:h-screen">
      <Image src={heroImage} alt="Sal Tinajero" />
    </div>
    <HeroForm />
  </section>
);

export default Hero;
