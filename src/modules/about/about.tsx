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
      <div className="border-b border-gray-200" />
      <Education />
      <div className="border-b border-gray-200" />
      <Skill />
      <div className="border-b border-gray-200" />
      <Experience />
      <div className="border-b border-gray-200" />
      <Award />
      <div className="border-b border-gray-200" />
      <Organization />
    </div>
  );
};

export default AboutModule;
