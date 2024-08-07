import ExperienceItem from '@/components/experienceItem/experienceItem';
import { fetchExperiences } from '@/lib/experience.notion';
import { convDuration } from '@/utils/convertDuration';
import React from 'react';

const Experience: React.FC = async () => {
  const experiences = await fetchData();

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold">Experiences</h1>
      {experiences.map((item, _index) => (
        <ExperienceItem
          key={item.id}
          role={item.role}
          description={item.description}
          company={item.company}
          duration={convDuration(item.startDate, item.endDate)}
        />
      ))}
    </div>
  );
};

async function fetchData() {
  const res = await fetchExperiences();
  return res;
}

export default Experience;
