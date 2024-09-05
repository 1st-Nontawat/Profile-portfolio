import styles from './ProjectsStyles.module.css';
import Laravel from '../../assets/Laravel.png';
import freshBurger from '../../assets/fresh-burger.png';
import Ecommerce from '../../assets/Ecommerce-logo.png';
import Hotel from '../../assets/Hotel.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Laravel}
          link="https://github.com/1st-Nontawat/laravel--CRUD"
          h3="laravel--CRUD"
          p="CRUD MY-SQL"
        />
        <ProjectCard
          src={Hotel}
          link="https://github.com/1st-Nontawat/Hotel-Website-"
          h3="Hotel-Webiste"
          p="Responsive Landing Page"
        />
        <ProjectCard
          src={Ecommerce }
          link="https://github.com/1st-Nontawat/Ecommerce"
          h3="Ecommerce"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/1st-Nontawat/FOOD-DEV"
          h3="FOOD-DEV"
          p="Food Delivery Website"
        />
      </div>
    </section>
  );
}

export default Projects;
