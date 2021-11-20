const width = 800;
const height = 400;

const posRatio = [
  { x: 0.25, y: 0.3 },
  { x: 0.7, y: 0.6 },
  { x: 0.4, y: 0.5 },
];

const position = posRatio.map((pos) => {
  return { x: pos.x * width, y: pos.y * height };
});

export default position;
