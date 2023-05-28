import { Goal } from "../models";

export function mapSubgoalPositions(
  subGoals: Array<Goal>,
  mainGoalDOM: HTMLDivElement
) {
  const { width, x, y } = mainGoalDOM?.getBoundingClientRect();

  return subGoals.map(({ id, goal }, index, arr) => {
    const angle = degToRad(360 / arr.length) * index;
    const radius = width;

    const [x1, y1] = [
      Math.cos(angle) * radius + x,
      Math.sin(angle) * radius + y,
    ];

    return {
      id,
      goal,
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
