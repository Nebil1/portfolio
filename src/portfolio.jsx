const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Nebil1.github.io/cleanfolio', // Consider updating with your own URL if available
  title: 'N/Y', 
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nebil Yisehak',
  role: 'Cloud and Security Engineer',
  description:
    'I am a Cloud and Security Engineer passionate about building secure and scalable infrastructures. I enjoy solving complex challenges with innovative solutions.',
  resume: 'https://example.com/resume.pdf', // Updated resume link format
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com', 
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'assets/images/project1.png', // New image property for project thumbnail
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'assets/images/project2.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'assets/images/project3.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  // Optionally add other skills as needed
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nebilyisehak@gmail.com',
}

export { header, about, projects, skills, contact }
