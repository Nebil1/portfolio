import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { about } from '../../portfolio'
import './About.css'


function About() {
  const { name, role, description, resume, social } = about;
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    setAnimatedText(`Hi, I am ${name}`); // Directly set the full text without animations
  }, [name]);

  return (
    <Parallax bgImage='/path-to-your-background-image.jpg' strength={300}>
      <div className='about center'>
        {name && (
          <h1>
            <span className='about__name'>{animatedText}</span>
            <span className='about__cursor'>&nbsp;|</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact center'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </Parallax>
  );
}

export default About;
