import { mapSubgoalPositions } from "../utils";
import Goal from "./Goal";

interface Props {
  subGoals: Array<string>;
  mainGoalRef: HTMLDivElement;
}

const SubGoals = ({ subGoals, mainGoalRef }: Props) => {
  if (!mainGoalRef) return;

  return (
    <div>
      {mapSubgoalPositions(subGoals, mainGoalRef).map(({ text, pos }) => {
        return <Goal text={text} pos={pos} />;
      })}
    </div>
  );
};

export default SubGoals;
