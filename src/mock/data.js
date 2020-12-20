import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1iU2d93yYeXoXwgRrausYjdFqoRbjGaIa/view?usp=drivesdk', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'screen1.PNG',
    title: 'MONSTER ROLODEX',
    info:
      'In this project, I had used React with a free API where we go the random username and the random Images, if you go to the search bar and type the name you got the same Monster.',
    info2: '',
    url: '',
    repo: 'https://github.com/bekundan/mosterRolodex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'screen3.PNG',
    title: 'A SECRET PAGE',
    info:
      'In this repo, I had used multiple ways to register and login methods where we use also multiple types of hashing passwords and also a third-party login method, Only that person sees the secret who has logged in.',
    info2: '',
    url: 'https://aqueous-sierra-90070.herokuapp.com/',
    repo: 'https://github.com/bekundan/secretpage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'screen2.PNG',
    title: 'A ToDo App',
    info:
      'This project used the express and the ejs for the frontend framework and use MongoDB to save data. an if you want to save any private todo the add /yourprivatespacename and you get your private todo.',
    info2: '',
    url: 'https://intense-shore-91738.herokuapp.com/',
    repo: 'https://github.com/bekundan/newtodo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'gkundan525@mail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://mobile.twitter.com/gkundan525',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/kundan525/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kundan-gupta-226359192/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bekundan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
