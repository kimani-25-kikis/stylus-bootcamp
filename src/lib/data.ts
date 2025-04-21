export interface CurriculumModule {
    id: number;
    title: string;
    objectives: string;
    resources: { name: string; url: string }[];
    exercises: string;
  }
  
  export const curriculumModules: CurriculumModule[] = [
    {
      id: 1,
      title: 'Introduction to Stylus',
      objectives: 'Understand Stylus basics and setup.',
      resources: [
        { name: 'Stylus Docs', url: 'https://docs.arbitrum.io/stylus' },
        { name: 'HackQuest', url: 'https://hackquest.io' },
      ],
      exercises: 'Set up a Stylus project and deploy a simple contract.',
    },
    {
      id: 2,
      title: 'Smart Contracts with Rust',
      objectives: 'Learn to write smart contracts using Rust.',
      resources: [
        { name: 'Rust Lang', url: 'https://www.rust-lang.org' },
        { name: 'Stylus GitHub', url: 'https://github.com/OffchainLabs/stylus' },
      ],
      exercises: 'Build and deploy a counter contract.',
    },
  ];