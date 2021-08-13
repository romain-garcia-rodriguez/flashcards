// Dependencies
import { useState } from "react";

// Components
import Header from "./_includes/Header";

const Home = () => {
  const [isTraining, setIsTraining] = useState(false);

  const handleIsTraining = (e) => {
    setIsTraining(!isTraining);
  };
  return (
    <div>
      <Header />
      <div className={"px-8 mt-4 flex justify-center items-center"}>
        <div className="flex flex-col">
          {isTraining ? <div className="mb-2">Here Flashcards</div> : ""}
          <button
            onClick={handleIsTraining}
            className={
              "text-medium border-2 border-solid border-green-300 rounded-md px-3 py-1 hover:bg-green-300"
            }
          >
            {isTraining ? "Stop" : "Start training"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
