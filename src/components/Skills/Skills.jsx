import uniqid from 'uniqid'
import { motion } from 'framer-motion';
import { skills } from '../../portfolio'
import './Skills.css'



function Skills() {
  if (!skills.length) return null

  return (
    <motion.section
      className='section skills'
      id='skills'
      data-aos='fade-up'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

export default Skills
