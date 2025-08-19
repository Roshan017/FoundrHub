export type Author = {
  _id: number;
  name: string;
};

export type Post = {
  _createdAt: Date;
  views: number;
  author: Author;
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

export const posts: Post[] = [
  {
    _createdAt: new Date("2025-08-18"),
    views: 55,
    author: { _id: 1, name: "Alice Johnson" },
    _id: 1,
    description: "This is a description",
    image: "https://images.unsplash.com/photo-1634912314704-c646c586b131",
    category: "Robots",
    title: "We Robots",
  },
  {
    _createdAt: new Date("2025-08-17"),
    views: 120,
    author: { _id: 2, name: "Brian Lee" },
    _id: 2,
    description: "Exploring AI-driven robotics",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    category: "AI",
    title: "Rise of Machines",
  },
  {
    _createdAt: new Date("2025-08-12"),
    views: 75,
    author: { _id: 3, name: "Carla Mendes" },
    _id: 3,
    description: "The world of humanoid robots",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    category: "Robotics",
    title: "Human-like Bots",
  },
  {
    _createdAt: new Date("2025-08-16"),
    views: 210,
    author: { _id: 4, name: "David Kim" },
    _id: 4,
    description: "Smart assistants in action",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Technology",
    title: "AI Assistants",
  },
  {
    _createdAt: new Date("2025-08-19"),
    views: 89,
    author: { _id: 5, name: "Emma Wilson" },
    _id: 5,
    description: "Future of robotics in medicine",
    image: "https://images.unsplash.com/photo-1581092919535-1c9c2e7e3f65",
    category: "Healthcare",
    title: "Robots in Medicine",
  },
  {
    _createdAt: new Date("2025-08-15"),
    views: 66,
    author: { _id: 6, name: "Frank Zhang" },
    _id: 6,
    description: "How automation is shaping industries",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    category: "Automation",
    title: "Industry 4.0",
  },
  {
    _createdAt: new Date("2025-08-14"),
    views: 133,
    author: { _id: 7, name: "Grace Patel" },
    _id: 7,
    description: "Robots learning through AI",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    category: "Learning",
    title: "Self-learning Bots",
  },
  {
    _createdAt: new Date("2025-08-11"),
    views: 47,
    author: { _id: 8, name: "Hiroshi Tanaka" },
    _id: 8,
    description: "AI in daily human life",
    image: "https://images.unsplash.com/photo-1526378722438-43f6d94aa0eb",
    category: "Lifestyle",
    title: "AI & Humans",
  },
  {
    _createdAt: new Date("2025-08-18"),
    views: 92,
    author: { _id: 9, name: "Isabella Rossi" },
    _id: 9,
    description: "Robotics in space exploration",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    category: "Space",
    title: "Robots in Space",
  },
  {
    _createdAt: new Date("2025-08-19"),
    views: 141,
    author: { _id: 10, name: "Jack Miller" },
    _id: 10,
    description: "Drones and their applications",
    image: "https://images.unsplash.com/photo-1508612761958-e931d843bdd4",
    category: "Drones",
    title: "Flying Robots",
  },
  {
    _createdAt: new Date("2025-08-13"),
    views: 61,
    author: { _id: 11, name: "Karen Lopez" },
    _id: 11,
    description: "Service robots at your door",
    image: "https://images.unsplash.com/photo-1554475903-2a0c936a8f76",
    category: "Service",
    title: "Delivery Bots",
  },
  {
    _createdAt: new Date("2025-07-19"),
    views: 199,
    author: { _id: 12, name: "Leo Fernandez" },
    _id: 12,
    description: "The ethics of robotics",
    image: "https://images.unsplash.com/photo-1581090700227-4c4e15b49c26",
    category: "Ethics",
    title: "Robot Morality",
  },
];
