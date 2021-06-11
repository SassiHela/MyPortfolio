import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hela SASSI | Full Stack Dev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  //title: '', // Hello, my name is
  name: 'Hela SASSI',
  subtitle: ' Développeuse FULL STACK JS Junior',
  cta: 'Savoir plus', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'Pic-Hela Sassi.jpg',
  paragraphOne:
    "J'ai suivi la formation FullStack JS chez Go My Code pour renforcer les compétences nécessaires pour entamer une carrière de développeur web. ",
  paragraphTwo:
    "ce que j'apprécie dans le domaine de développement web le MOMENT de satisfaction que j'ai eu après avoir créé des sites web ergonomiquement beaux",
  paragraphThree:
    "j'admire les merveilles d'un coucher de soleil , mon âme se répand en adoration du créateur donc dans mon portofolio j'ai fait appel à ce magnifique couleur evening sunshine",

  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Tunisie Recyclage',
    info: "Projet final pour l'obtention du certificat GoMyCode",
    info2:
      'Un boutique en ligne de produits éco-responsable, pour réduire le plastique de sa vie quotidienne, avec un service de payement STRIPE',
    url: 'https://tunisierecyclage.herokuapp.com/',
    repo: 'https://github.com/SassiHela/Final-project-e-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Portfolio',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Souhaitez-vous travailler avec moi ? Super!',
  btn: 'Contactez moi',
  email: 'hela.sassi13@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hela-sassi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SassiHela',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
