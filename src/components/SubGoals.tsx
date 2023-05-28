import { mapSubgoalPositions } from "../utils";
import Goal from "./Goal";
import { Goal as GoalInterface } from "../models/index";

interface Props {
  subGoals: Array<GoalInterface>;
  mainGoalRef: HTMLDivElement;
}

const SubGoals = ({ subGoals, mainGoalRef }: Props) => {
  if (!mainGoalRef) return;

  return (
    <div>
      {mapSubgoalPositions(subGoals, mainGoalRef).map(({ id, goal, pos }) => {
        return <Goal key={id} text={goal} pos={pos} />;
      })}
    </div>
  );
};

export default SubGoals;
