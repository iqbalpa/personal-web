import React from 'react';
import AwardItem from '@/components/awardItem/AwardItem';
import { fetchAwards } from '@/lib/award.notion';

const Award: React.FC = async () => {
  const awards = await fetchData();

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold">Honor and Awards</h1>
      {awards.map((award, index) => (
        <AwardItem
          key={award.id}
          title={award.title}
          desc={award.description}
        />
      ))}
    </div>
  );
};

async function fetchData() {
  const res = await fetchAwards();
  return res;
}

export default Award;
