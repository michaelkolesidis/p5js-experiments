import projectList from '../data/projects.js';
import { populateProjects } from '../utils/populateProjects.js';

export default function projects() {
  const projects = document.getElementById('projects');

  if (projects != null) {
    const projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('id', 'projects-container');
    projects.appendChild(projectsContainer);
    populateProjects(0, projectList.length, projectsContainer);
  }
}
