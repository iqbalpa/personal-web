import React from 'react';
import Education from './section/Education';
import Skill from './section/Skill';
import Experience from './section/Experience';
import Award from './section/Award';
import Organization from './section/Organization';
import Hero from './section/Hero';

const AboutModule: React.FC = () => {
  return (
    <div className="max-w-screen flex flex-col gap-4 px-10 pb-20 pt-5 lg:px-40">
      <Hero />
      <Education />
      <Skill />
      <Experience />
      <Award />
      <Organization />
    </div>
  );
};

export default AboutModule;
