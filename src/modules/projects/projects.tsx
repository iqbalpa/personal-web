import ProjectItem from '@/components/projectItem/projectItem';
import { fetchProjects } from '@/lib/project.notion';
import React from 'react';

const ProjectsModule: React.FC = async () => {
  const projects = await fetchData();

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-10 lg:px-20 lg:py-10">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-3">
        {projects.map((item, _index) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

async function fetchData() {
  const res = await fetchProjects();
  return res;
}

export default ProjectsModule;
