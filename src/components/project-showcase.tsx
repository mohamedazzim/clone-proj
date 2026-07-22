"use client";

import { SiteImage as Image } from "@/components/site-image";
import { type KeyboardEvent, useId, useRef, useState } from "react";

export type ProjectShowcaseItem = {
  title: string;
  image: string;
  description: string;
};

export function ProjectShowcase({ projects }: { projects: readonly ProjectShowcaseItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabListId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProject = projects[activeIndex];

  const selectTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % projects.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + projects.length) % projects.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = projects.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectTab(nextIndex);
  };

  if (!activeProject) return null;

  return (
    <div className="overflow-hidden rounded-lg bg-navy text-white" data-project-showcase>
      <div className="flex flex-wrap border-b border-white/15" role="tablist" aria-label="Strategic projects">
        {projects.map((project, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={project.title}
              ref={(node) => { tabRefs.current[index] = node; }}
              id={`${tabListId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`${tabListId}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`min-h-14 flex-1 border-r border-white/15 px-5 py-3 text-left text-sm font-medium last:border-r-0 sm:text-base ${
                active ? "bg-gold text-white" : "bg-navy text-white/70"
              }`}
            >
              {project.title}
            </button>
          );
        })}
      </div>

      <div
        id={`${tabListId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabListId}-tab-${activeIndex}`}
        className="grid lg:grid-cols-[1.15fr_.85fr]"
      >
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[470px]">
          <Image
            src={activeProject.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <h3 className="font-heading text-4xl sm:text-5xl">{activeProject.title}</h3>
          <p className="mt-5 text-base leading-7 text-white/65">{activeProject.description}</p>
        </div>
      </div>
    </div>
  );
}
