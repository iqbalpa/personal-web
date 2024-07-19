import ProjectItem from '@/components/projectItem/projectItem';
import { fetchProjects } from '@/lib/project.notion';
import React from 'react';

const ProjectsModule: React.FC = async () => {
  const projects = await fetchData();

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-10 lg:px-20 lg:py-10">
      <h1 className="text-lg font-bold md:text-xl lg:text-2xl">Projects</h1>
      <div
        role="tablist"
        className="tabs tabs-lifted tabs-sm mt-3 w-full md:tabs-md lg:tabs-lg md:mt-5"
      >
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab whitespace-nowrap"
          aria-label="All"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {projects.map((item, _index) => (
              <ProjectItem key={item.id} {...item} />
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab whitespace-nowrap"
          aria-label="Website"
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {projects
              .filter((item) => item.type === 'se')
              .map((item, _index) => (
                <ProjectItem key={item.id} {...item} />
              ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab whitespace-nowrap"
          aria-label="Machine Learning"
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {projects
              .filter((item) => item.type === 'ml')
              .map((item, _index) => (
                <ProjectItem key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

async function fetchData() {
  const res = await fetchProjects();
  return res;
}

export default ProjectsModule;
