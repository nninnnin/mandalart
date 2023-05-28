export function mapSubgoalPositions(subGoals, mainGoalDOM: HTMLDivElement) {
  const { width, x, y } = mainGoalDOM?.getBoundingClientRect();

  return subGoals.map((goal, index, arr) => {
    const angle = degToRad(360 / arr.length) * index;
    const radius = width;

    const [x1, y1] = [
      Math.cos(angle) * radius + x,
      Math.sin(angle) * radius + y,
    ];

    return {
      text: goal,
      pos: {
        top: `${y1}px`,
        left: `${x1}px`,
      },
    };
  });
}

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}
