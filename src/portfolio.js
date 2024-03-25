// import aboutpic from "./components/Access/mePhoto.jpg"
import catTinder from "./assets/cat-tinder.png"
import perfume from "./assets/coming-soon.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/chantelalexiacarter/',
  title: 'Chantel Carter'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chantel Carter',
  role: 'full-stack web developer with experience in React JS, Ruby on Rails, Jest, and RSpec testing',
  description:
    "Based in Sounthern California I offer a diverse professional background to the technical community with experience as a Hospital Corpsman in the US Navy, real estate, and administrative roles.",
  social: {
    linkedin: 'https://www.linkedin.com/in/chantelalexiacarter/',
    github: 'https://github.com/chantelcarter',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Cat Tinder',
    image: catTinder,
    description:
      "Cat Tinder. It's like Tinder, but for cats. Cat Tinder is a full-stack, decoupled application that creates profiles for cats and allows a user to see other cat profiles. A decoupled application means we are actually creating two separate applications. A React application to create the views in the frontend and a Rails API that handles our data.",
    stack: ['React.js', 'Ruby on Rails', 'PostgreSQL'],
    sourceCode: 'https://github.com/chantelcarter/cat-tinder-frontend-cc',
    livePreview: 'https://cat-tinder-frontend-wotv.onrender.com',
  },
  {
    name: 'Perfume App',
    image: perfume,
    description:
      'A full-stack web application with complete CRUD actions. Sign up to add to our perfume collection and discover the notes of different fragrances with plenty more features to come!',
    stack: ['React.js', 'Ruby on Rails', 'PostgreSQL'],
    sourceCode: 'https://github.com/chantelcarter/perfume-app-frontend',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Ruby',
  'React',
  'Rails',
  'PostgreSQL',
  'RSpec',
  'Jest',
  'HTML',
  'CSS',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'carter.chantel.a@gmail.com',
}

export { header, about, projects, skills, contact }
