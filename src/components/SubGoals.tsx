import { mapSubgoalPositions } from "../utils";
import Goal from "./Goal";
import { Goal as GoalInterface } from "../models/index";
import { useEffect, useState } from "react";

interface Props {
  subGoals: Array<GoalInterface>;
  mainGoalRef: HTMLDivElement;
}

const SubGoals = ({ subGoals, mainGoalRef }: Props) => {
  const [positionedSubGoals, setPositionedSubgoals] = useState([]);

  useEffect(() => {
    if (!mainGoalRef) return;

    setInterval(() => {
      setPositionedSubgoals(mapSubgoalPositions(subGoals, mainGoalRef));
    }, 50);
  }, [mainGoalRef]);

  if (!mainGoalRef) return;

  return (
    <div>
      {positionedSubGoals.map(({ id, goal, pos }) => {
        return <Goal key={id} text={goal} pos={pos} />;
      })}
    </div>
  );
};

export default SubGoals;
