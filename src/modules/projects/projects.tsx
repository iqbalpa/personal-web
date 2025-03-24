import AwardItem from '@/components/awardItem/awardItem';
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
          <div className="columns-1 gap-3 md:columns-2 lg:columns-3 2xl:columns-4">
            {projects.map((item, _index) => (
              <div className="mb-3 break-inside-avoid">
                <ProjectItem key={item.id} {...item} />
              </div>
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
          <div className="columns-1 gap-3 md:columns-2 lg:columns-3 2xl:columns-4">
            {projects
              .filter((item) => item.type === 'se')
              .map((item, _index) => (
                <div className="mb-3 break-inside-avoid">
                  <ProjectItem key={item.id} {...item} />
                </div>
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
          <div className="columns-1 gap-3 md:columns-2 lg:columns-3 2xl:columns-4">
            {projects
              .filter((item) => item.type === 'ml')
              .map((item, _index) => (
                <div className="mb-3 break-inside-avoid">
                  <ProjectItem key={item.id} {...item} />
                </div>
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
