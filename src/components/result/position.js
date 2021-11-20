const width = window.innerWidth;
const height = 642;

const posRatio = [
  { x: 0.7, y: 0.3 },
  { x: 0.1, y: 0.4 },
  { x: 0.5, y: 0.5 },
  { x: 0.2, y: 0.75 },
  { x: 0.6, y: 0.9 },
];

const position = posRatio.map((pos) => {
  return { x: pos.x * width, y: pos.y * height };
});

export default position;
