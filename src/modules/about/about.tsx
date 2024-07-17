import React from 'react';
import Award from './section/awards';
import Education from './section/education';
import Experience from './section/experience';
import Hero from './section/hero';
import Organization from './section/organization';
import Skill from './section/skill';

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
