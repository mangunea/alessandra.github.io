//all information of my profile
export const profile = {
    name: 'Alessandra',
    logo: '<My Developer Profile />',
    available: 'Available for co-op',
    headline: 'Alessandra Mangune',
    intro:
        'Hi my name is Alessandra! I am a software developer with a passion for building web and cloud applications. I enjoy working with modern technologies and continuously learning new skills.',
    stats: [
        { value: '2+', label: 'Projects completed' },
        { value: 'Cloud + Web', label: 'Main focus' },
        { value: 'Open source', label: 'Where I share my work' },
    ],
        photo: 'public/assets/portfoliopicture.jpg',
        photoAlt: 'Portrait of Alessandra',
        email: 'alessandramangune@gmail.com',
        links: [
        { label: 'GitHub', href: 'https://github.com/mangunea' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alessandramangune' },
  ],
}

//about me
export const about = {
  paragraphs: [
    'around 2 paragraphs here on the works ive done and the people i like working with.',
    'talk about the tools im growing in!.',
  ]
}

//all my skills
export const skills = [
  { group: 'Languages', items: ['JavaScript', 'C#', 'Python', 'Java', 'SQL'] },
  { group: 'Frontend and mobile', items: ['React', 'Vite', 'HTML and CSS', 'Tailwind CSS'] },
  { group: 'Cloud and infrastructure', items: ['AWS', 'Docker', 'Linux', 'Git and GitHub Actions'] },
  { group: 'Backend and storage', items: ['Node.js', 'Spring Boot', 'SQLite'] },
]

//add projects here
export const projects = [
  {
    category: 'Game Development',
    title: 'Project one',
    description: 'One or two sentences on what it does and who it is for. Say what was hard about it.',
    stack: ['React', 'Vite', 'REST API'],
    href: 'https://github.com/mangunea/project-one',
    linkLabel: 'GitHub',
  },
]

//my experiences and school information
export const timeline = [
  {
    when: 'School',
    title: 'Bachelor of Computer Science - Cloud Computing',
    place: 'Sheridan College',
    text: 'Sept 2024- April 2028',
  },
  {
    when: 'Volunteering',
    title: 'Student Mentor',
    place: 'Big Brothers & Big Sisters of Halton and Hamilton',
    text: 'The side projects where you try new tools and build things for yourself.',
  },
  {
    when: 'Work',
    title: 'Registration Lead',
    place: 'Multisport Canada',
    text: 'The side projects where you try new tools and build things for yourself.',
  },
]

//connecting
export const contact = {
  title: 'Let’s connect!',
  text: 'I am open to co-op, and open source collaboration. The fastest way to reach me is email.',
}