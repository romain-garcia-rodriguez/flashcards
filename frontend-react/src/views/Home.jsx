// Dependencies
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Header from "./_includes/Header";

const Home = () => {
  const { decks } = useSelector((state) => state.flashcardsReducer);
  const disaptch = useDispatch();

  const [isTraining, setIsTraining] = useState(false);
  const newDeck = {
    id: 2,
    name: "React Flashcards",
    flashcards: [
      {
        front: "Initialize a constante",
        back: "const = ...",
        category: "programming",
      },
      {
        front: "Initialize a variable",
        back: "let = ...",
        category: "programming",
      },
      {
        front: "Create a function",
        back: "function () {...}",
        category: "programming",
      },
    ],
  };

  const handleIsTraining = (e) => {
    setIsTraining(!isTraining);
  };

  return (
    <div>
      <Header />
      <div className={"px-8 mt-4 flex justify-center items-center mb-4"}>
        <div className="flex flex-col">
          {isTraining ? <div className="mb-2">Here Flashcards</div> : ""}
          <button
            onClick={handleIsTraining}
            className={
              "text-medium border-2 border-solid border-green-300 rounded-md px-5 py-2 font-semibold hover:bg-green-300"
            }
          >
            {isTraining ? "Stop" : "Start training"}
          </button>
        </div>
      </div>
      <section className={`mx-8 ${isTraining ? "hidden" : ""}`}>
        <header className="mb-4 flex items-end">
          <h3 className="font-semibold text-xl mr-7">Deck list</h3>
          <button
            onClick={() => {
              disaptch({ type: "DECK/CREATE", payload: newDeck });
            }}
            className="font-light border-b hover:border-green-300 border-solid border-transparent"
          >
            Create deck +
          </button>
        </header>
        <div className="flex flex-wrap">
          {decks.map((deck) => {
            return (
              <div
                key={deck.id}
                className="mr-5 mb-5 border border-solid border-gray-300 w-60 h-24 p-5 flex items-center justify-center rounded-md hover:shadow-lg hover:border-green-300 cursor-pointer"
              >
                <p className="font-medium">{deck.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
