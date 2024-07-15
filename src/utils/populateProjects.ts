import projectList from '../data/projects.js';

export const populateProjects = (
  start: number,
  end: number,
  parent: HTMLElement
) => {
  // Ppopulate Projects
  for (let i = start; i < end; i++) {
    const project = projectList[i];
    if (project.visible === false) {
      continue;
    }

    // Project
    const proj = document.createElement('div');
    proj.classList.add('project-card');

    // Project Image with Link
    const image = document.createElement('img');
    image.loading = 'lazy';
    image.setAttribute('src', project.image);
    image.setAttribute('alt', project.name);
    image.classList.add('project-image');
    if (window.innerWidth > 700) {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('project-image-container');
      imageContainer.appendChild(image);
      proj.appendChild(imageContainer);
    } else {
      proj.appendChild(image);
    }
    image.addEventListener('click', () => {
      open(`${project.deployment}`);
    });

    // Title
    const title = document.createElement('a');
    title.classList.add('project-title');
    title.href = `${project.deployment}`;
    title.target = '_blank';
    title.innerHTML = `<br>${project.name.toLocaleUpperCase()}`;
    proj.appendChild(title);

    // Summary
    const summary = document.createElement('p');
    summary.classList.add('project-summary');
    summary.innerHTML = `${project.summary}`;
    proj.appendChild(summary);

    // Repository Link
    if (project.repository.length > 0) {
      const repoLink = document.createElement('a');
      repoLink.classList.add('repo-link');
      repoLink.innerHTML = 'GitHub';
      repoLink.href = `${project.repository}`;
      repoLink.target = '_blank';
      proj.appendChild(repoLink);
    }

    parent.appendChild(proj);
  }

  const allProjects = document.querySelectorAll('.project-card');
  allProjects.forEach((proj) => {
    proj.addEventListener('click', (e) => {
      /* Styling */
      const target = e.target as HTMLElement;
      if (target.classList.contains('project-card')) {
      }
    });
  });
};
