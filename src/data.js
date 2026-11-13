//all information of my profile
export const profile = {
    name: 'Alessandra',
    logo: '<Portfolio />',
    headline: 'Alessandra Mangune',
    intro:
        'Hi my name is Alessandra! I am a Cloud Computing student with a passion for building web and cloud applications. I enjoy working with hardware and continuously learning new skills.',
    stats: [
        { value: '3+', label: 'Projects completed' },
        { value: 'Cloud + Web', label: 'Main focus' },
        { value: 'Open source', label: 'Where I share my work' },
    ],
        photo: 'assets/portfoliopicture.jpg',
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
    'I am currently a student at Sheridan College purusing a Bachelor of Computer Science in Cloud Computing. I enjoy building things I can run and show people, like web applications, mini games and cloud solutions. I have also taken part in a datathon, and plan to do more! Working with hardware like Arduinos are also something I enjoy, and I am always looking for new opportunities to learn and grow as a developer. One main thing about me is that everything I touch must be organized!',
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
    stack: ['Godot,', 'C#,', 'Krita'],
    href: 'https://github.com/mangunea/kitty-game-project',
    linkLabel: 'GitHub',
  },
  {
    category: 'Game Development',
    title: 'Snake Apple Game',
    description: 'My own version of the classic snake apple game.',
    stack: ['libGDX,', 'Java,', 'Gradle'],
    href: 'https://github.com/mangunea/SnakeGame',
    linkLabel: 'GitHub',
  },
  {
    category: 'Hardware',
    title: 'Distance Sensing Trash Can',
    description: 'A trashcan that opens when you are close to it using an Arduino and a distance sensor.',
    stack: ['Arduino Uno R3,', 'C++'],
    href: 'https://drive.google.com/file/d/1Igr4CP2OL3Qj7gEap3q-V6C4B05eUJc2/view?usp=sharing',
    linkLabel: 'Video Demo',
  },
]

//my experiences and school information
export const timeline = [
  {
    when: 'Education',
    title: 'Bachelor of Computer Science - Cloud Computing',
    place: 'Sheridan College: Sept 2024 - April 2028',
    text: 'Relevant Courses: IoT, Information Systems & Security, OO Programming, Enterprise Software Systems'
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
    text: 'Supported elementary students with homework and academic projects, in regards to all school subjects. ',
  },  
  
]

//connecting
export const contact = {
  title: 'Let’s connect!',
  text: 'I am open to co-op, and open source collaboration. The fastest way to reach me is email.',
}