import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useEffect, useState } from 'react';
import { about } from '../../portfolio'
import './About.css'

function About() {
  const { name = '', role, description, resume, social } = about;
  const [animatedText, setAnimatedText] = useState('');
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const text = name && typeof name === 'string' ? `Hi, I am ${name}` : 'Hi, I am';

  useEffect(() => {
    setDisplayIndex(0);
    setAnimatedText('');
    if (!name || typeof name !== 'string') {
      setAnimatedText('Hi, I am');
      return;
    }
    const interval = setInterval(() => {
      setDisplayIndex((prev) => {
        if (prev + 1 > text.length) {
          clearInterval(interval);
          return text.length;
        }
        return prev + 1;
      });
    }, 180);
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [name]);

  useEffect(() => {
    setAnimatedText(text.slice(0, displayIndex));
  }, [displayIndex, text]);

  // Split animatedText for smooth letter fade-in, preserve spaces
  return (
    <section className="about center" id="about">
      <h1>
        <span className="about__name">
          {animatedText.split('').map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                opacity: 1,
                whiteSpace: char === ' ' ? 'pre' : 'normal',
                transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          <span className="about__cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </span>
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