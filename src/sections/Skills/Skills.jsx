import styles from './SkillsStyles.module.css';
import SkillItem from '../../components/SkillItem';
import javascriptIcon from '../../assets/javascript-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import vueIcon from '../../assets/vue-icon.svg';
import nodejsIcon from '../../assets/nodejs-icon.png';
import tailwindIcon from '../../assets/tailwind-icon.svg';
import gitIcon from '../../assets/git-icon.svg';
import viteIcon from '../../assets/vite-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import expressIcon from '../../assets/express-icon.svg';
import djangoIcon from '../../assets/django-icon.svg';
import pythonIcon from '../../assets/python-icon.svg';
import postgresqlIcon from '../../assets/postgresql-icon.svg';


function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillItem src={htmlIcon} skill="HTML" />
        <SkillItem src={cssIcon} skill="CSS" />
        <SkillItem src={pythonIcon} skill="Python" />
        <SkillItem src={javascriptIcon} skill="JavaScript" />
        <SkillItem src={typescriptIcon} skill="TypeScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillItem src={vueIcon} skill="Vue" />
        <SkillItem src={reactIcon} skill="React" />
        <SkillItem src={postgresqlIcon} skill="PostgreSQL" />
        <SkillItem src={nodejsIcon} skill="NodeJS" />
        <SkillItem src={tailwindIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillItem src={viteIcon} skill="Vite" />
        <SkillItem src={djangoIcon} skill="Django" />
        <SkillItem src={gitIcon} skill="Git" />
        <SkillItem src={expressIcon} skill="Express" />
      </div>
    </section>
  );
}

export default Skills;
