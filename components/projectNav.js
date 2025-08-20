import { projects } from "./projectData";

export function getProjectNav(currentSlug) {
  const n = projects.length;
  const i = Math.max(0, projects.findIndex(p => p.slug === currentSlug));
  return {
    prev: projects[(i - 1 + n) % n],
    next: projects[(i + 1) % n],
  };
}