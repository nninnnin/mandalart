import Goal from "./components/Goal";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Goal
        text={"작은 크리에이터 되기"}
        subGoals={[
          "독립출판사에서 책 출간하기",
          "나만의 스타일 찾기",
          "유튜브 구독자 1천명",
          "인스타 팔로워 500명",
        ]}
      />
    </div>
  );
};

export default App;
