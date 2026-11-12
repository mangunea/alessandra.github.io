//all information of my profile
export const profile = {
    name: 'Alessandra',
    logo: '<Portfolio />',
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
  { group: 'Languages', items: ['- JavaScript', '- C#', '- Python', '- Java', '- SQL'] },
  { group: 'Frontend & Mobile', items: ['- React', '- Vite', '- HTML and CSS', '- Tailwind CSS'] },
  { group: 'Cloud & Infrastructure', items: ['- AWS', '- Docker', '- Linux', '- Git and GitHub Actions'] },
  { group: 'Backend & Storage', items: ['- Node.js', '- Spring Boot', '- SQLite'] },
]

//add projects here
export const projects = [
  {
    category: 'Game Development',
    title: 'Cat Game',
    description: 'A demo cat game with simple mechanics using Godot and C#.',
    stack: ['Godot', 'C#', 'Krita'],
    href: 'https://github.com/mangunea/kitty-game-project',
    linkLabel: 'GitHub',
  },
]

//my experiences and school information
export const timeline = [
  {
    when: 'Education',
    title: 'Bachelor of Computer Science - Cloud Computing',
    place: 'Sheridan College: Sept 2024 - April 2028',
    text: 'Relevant Courses: Internet of Things, Information Systems and Security, OO Programming, Enterprise Software Systems'
  },
  {
    when: 'Work',
    title: 'Registration Lead',
    place: 'Multisport Canada: April 2026 - Current',
    text: 'Applied organizational, problem-solving, and critical thinking skills in a fast-paced environment while balancing multiple responsibilities.',
  },
  {
    when: 'Leadership',
    title: 'VP & Treasurer',
    place: 'Sheridan College SFSA Club: April 2025 - Current',
    text: 'Engaged with students during club events and recruitment activities, answering questions and encouraging participation.',
  },
  {
    when: 'Volunteering',
    title: 'Student Mentor',
    place: 'Big Brothers & Big Sisters of Halton and Hamilton: Nov 2022 - May 2023',
    text: 'Supported elementary students with homework and academic projects, strengthening communication and problem-solving skills in regards to all school subjects. ',
  },  
  
]

//connecting
export const contact = {
  title: 'Let’s connect!',
  text: 'I am open to co-op, and open source collaboration. The fastest way to reach me is email.',
}