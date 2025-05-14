import { useContext, useState, useEffect } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2' // Updated to MUI v5
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded' // Updated to MUI v5
import MenuIcon from '@mui/icons-material/Menu' // Updated to MUI v5
import CloseIcon from '@mui/icons-material/Close' // Updated to MUI v5
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

function Navbar() {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navbarLinks = document.querySelectorAll('.navbar__link');

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          navbarLinks.forEach((link) => {
            if (link) link.classList.remove('active'); // Ensure link exists
          });
          if (navbarLinks[index]) {
            navbarLinks[index].classList.add('active'); // Only add if exists
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav navbar__link'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav navbar__link'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav navbar__link'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
