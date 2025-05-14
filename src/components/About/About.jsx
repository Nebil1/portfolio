import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useEffect, useState } from 'react';
// import { Parallax } from 'react-parallax'; 
import { about } from '../../portfolio'
import './About.css'

function About() {
  const { name = '', role, description, resume, social } = about;
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const text = name && typeof name === 'string'
      ? `Hi, I am ${name}`
      : 'Hi, I am';

    let index = 0;
    setAnimatedText('');

    if (!name || typeof name !== 'string') {
      setAnimatedText('Hi, I am');
      return undefined;
    }

    const interval = setInterval(() => {
      setAnimatedText((prev) => {
       if (index < text.length) {
       const next = prev + text[index];
       index += 1; // Use operator assignment
       return next;
  }
        clearInterval(interval);
        return prev;
      });
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [name]);

  return (
    <section className="about center">
      <h1>
        <span className="about__name">{animatedText}</span>
      </h1>
      {role && <h2 className="about__role">{role}</h2>}
      {description && <p className="about__desc">{description}</p>}
      <div className="about__contact center">
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <span type="button" className="btn btn--outline">
              resume
            </span>
          </a>
        )}
        {social?.github && (
          <a
            href={social.github}
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        )}
        {social?.linkedin && (
          <a
            href={social.linkedin}
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </section>
  );
}

export default About;