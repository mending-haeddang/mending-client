const width = window.innerWidth;
const height = 642;

const posRatio = [
  { x: 0.65, y: 0.05 },
  { x: 0.1, y: 0.1 },
  { x: 0.45, y: 0.25 },
  { x: 0.2, y: 0.4 },
  { x: 0.55, y: 0.55 },
];

const position = posRatio.map((pos) => {
  return { x: pos.x * width, y: pos.y * height };
});

export default position;
