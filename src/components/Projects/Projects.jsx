import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

function Projects() {
  if (!projects.length) return null;

  return (
    <section className='section projects' id='projects' data-aos='fade-up'>
      <h2 className='section__title'>Projects</h2>
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
