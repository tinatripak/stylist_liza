const projects = [
  {
    id: "1",
    name: "Project 1",
    theme_capsule:
      "A collection was created with basic classic things for spring.",
    images: [
      { id: "1", src: "capsule1.jpg", width: 1280, height: 1280 },
      { id: "2", src: "capsule2.jpg", width: 1280, height: 1280 },
      { id: "3", src: "capsule3.jpg", width: 1280, height: 1280 },
      { id: "4", src: "capsule4.jpg", width: 1280, height: 1280 },
    ],
  },
  {
    id: "2",
    name: "Project 2",
    theme_capsule:
      "A summer capsule was created with dresses, rough jackets, blouses, T-shirts and trousers.",
    images: [
      { id: "1", src: "capsule5.jpg", width: 1280, height: 1280 },
      { id: "2", src: "capsule6.jpg", width: 1280, height: 1280 },
      { id: "3", src: "capsule7.jpg", width: 1280, height: 1280 },
      { id: "4", src: "capsule8.jpg", width: 1280, height: 1280 },
      { id: "5", src: "capsule9.jpg", width: 1280, height: 1280 },
    ],
  },
  {
    id: "3",
    name: "Project 3",
    theme_capsule:
      "Capsule for everyday and office use, which can be combined.",
    images: [
      { id: "1", src: "capsule10.jpg", width: 1280, height: 1280 },
      { id: "2", src: "capsule11.jpg", width: 1280, height: 1280 },
      { id: "3", src: "capsule12.jpg", width: 1280, height: 1280 },
    ],
  },
];

const photos = projects.map((project) => ({
  id: project.id,
  name: project.name,
  theme_capsule: project.theme_capsule,
  images: project.images,
}));

export default photos;
