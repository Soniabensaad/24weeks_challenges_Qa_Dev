const posts = [
  {
    id: 1,
    title: "Learn JavaScript",
    likes: 120,
    tags: ["js", "web"]
  },
  {
    id: 2,
    title: "Learn React",
    likes: 200,
    tags: ["react", "web"]
  },
  {
    id: 3,
    title: "Learn Node",
    likes: 150,
    tags: ["node", "js"]
  }
];
console.log(posts.reduce((acc, curr) => {
  return acc + curr.likes; // Correction ici : acc est le nombre, curr est l'objet
}, 0))
console.log(Math.max(...posts.map(e=>e.likes))
 )
console.log(posts.map(t=>t.tags))
