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
  subtitle: ' Développeuse FULL STACK JS Junior MERN Stack',
  cta: 'Savoir plus', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'Pic-Hela Sassi.jpg',
  paragraphOne:
    "Récemment, j'ai suivi la formation FullStack JS chez Go My Code pour renforcer les compétences nécessaires pour entamer une carrière de développeur web. ",
  paragraphTwo:
    "Je pense que ce qui est important pour moi lors de la création d'un site web c’est que le design soit travaillé et que le site soit agréable et de navigation très simple.",
  paragraphThree:
    "J'admire les merveilles d'un coucher de soleil , mon âme se répand en adoration du créateur. C'est ce qui m'a fait utiliser cette magnifique couleur",

  resume: 'https://drive.google.com/file/d/1IVhbP3Xs2KH5bEsmlQQ2wexoY2MihOq8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Tunisie Recyclage',
    info: "Projet final pour l'obtention du certificat GoMyCode.",
    info2:
      'Un boutique en ligne de produits éco-responsable, pour réduire le plastique de sa vie quotidienne, avec un service de payement STRIPE.',
    info3: 'Les technologies utilisées : React , Node JS, MongoDB.',
    url: 'https://tunisierecyclage.herokuapp.com/',
    repo: 'https://github.com/SassiHela/Final-project-e-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Portfolio',
    info: '',
    info2: '',
    info3: 'Les technologies utilisées : React ,Gatsby.',
    url: '',
    repo: 'https://github.com/SassiHela/MyPortfolio', // if no repo, the button will not show up
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
