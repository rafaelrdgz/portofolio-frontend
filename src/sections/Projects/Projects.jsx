import styles from './ProjectsStyles.module.css'; 
import ProjectCard from '../../components/ProjectCard';
import project1Img from '../../assets/project-1.png';
import project2Img from '../../assets/project-2.png';
import project3Img from '../../assets/project-3.svg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={project1Img}
          link="https://github.com/rafaelrdgz/licences-management-system"
          h3="Management System"
          p="Driver's license center management system developed with React, Express and PostgreSQL."
        />
        <ProjectCard  
          src={project2Img}
          link="https://github.com/rafaelrdgz/process-sychronization-visualization"
          h3="Process Simulation"
          p="Visualization of classic process synchronization problems made with React and Django."
        />
        <ProjectCard
          src={project3Img}
          link="https://github.com/rafaelrdgz/bayesian-network-model-python"
          h3="Bayesian Model"
          p="Bayesian network model for predicting probabilities made in Python."
        />
      </div>
    </section>
  );
}

export default Projects;
