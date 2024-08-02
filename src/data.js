//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone as FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/booki.png';
import Project2 from './assets/img/projects/nina.png';
import Project3 from './assets/img/projects/kasa.png';
import Project4 from './assets/img/projects/sophie.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';
import SkillImg6 from './assets/img/skills/git.png';
import SkillImg7 from './assets/img/skills/figma.png';


// navigation
export const navigation = [
  {
    name: 'accueil',
    href: 'accueil',
  },
  {
    name: 'à propos',
    href: 'à propos',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FaLinkedin />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Site Booki',
    category: 'Développement Web',
  },
  {
    id: '2',
    image: Project2,
    name: 'Portfolio Nina Carducci',
    category: 'Autres',
  },
  {
    id: '3',
    image: Project3,
    name: 'Kasa',
    category: 'React, JS',
  },
  {
    id: '4',
    image: Project4,
    name: 'Site Sophie bluel',
    category: 'React, JS',
  },
];

// projects
export const projectsNav = [
  {
    name: 'Tous',
  },
  {
    name: 'React, JS',
  },
  {
    name: 'Développement Web',
  },
  {
    name: 'Autres',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Front-end',
    description:
      "Créez des interfaces utilisateurs modernes et réactives pour vos applications web avec mes services front-end. Je m'assure que votre site soit non seulement esthétique, mais aussi intuitif et facile à utiliser.",
  },
  {
    icon: <FiSettings />,
    name: 'Back-end',
    description:
      "Développez une architecture back-end robuste et sécurisée pour supporter votre application web. Je m'occupe de la gestion des bases de données, de la création des API et de l'intégration des services pour garantir une performance optimale.",
  },
  {
    icon: <FiPenTool />,
    name: 'Coach Agile',
    description:
      "Améliorez votre efficacité et collaborez mieux avec une méthodologie agile adaptée à vos besoins. En tant que coach agile, je vous guide pour adopter les meilleures pratiques et transformer votre équipe en une unité performante et flexible.",
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      "Augmentez votre visibilité en ligne et attirez plus de visiteurs grâce à mes services SEO. J'optimise votre site pour les moteurs de recherche, améliore votre contenu et vous aide à atteindre un meilleur classement.",
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Des Questions?',
    subtitle: '👇',
    description: 'nabilmhl-dev@outlook.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Localisation',
    subtitle: 'Paris, France',
    description: 'Service de qualité',
  },
];
