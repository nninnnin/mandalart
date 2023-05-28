import { v4 as uuid } from "uuid";
import { useState } from "react";
import Goal from "./components/Goal";
import { Goal as GoalInterface } from "./models";

const App = () => {
  const [subGoals, setSubGoals] = useState<Array<GoalInterface>>([
    { id: uuid(), goal: "독립출판사에서 책 출간하기" },
    { id: uuid(), goal: "나만의 스타일 찾기" },
    { id: uuid(), goal: "유튜브 구독자 1천명" },
    { id: uuid(), goal: "인스타 팔로워 500명" },
  ]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <Goal text={"작은 크리에이터 되기"} subGoals={subGoals} />
    </div>
  );
};

export default App;
