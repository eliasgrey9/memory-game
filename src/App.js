import "./App.css";
import SingleCard from "./components/SingleCard";
import React, { useState, useEffect } from "react";
const cardImages = [
  {
    src: "https://i.pinimg.com/originals/86/56/2f/86562ffc016b2c03724e95e0afdc2702.jpg",
    matched: false,
  },
  {
    src: "https://media.istockphoto.com/id/1183916666/vector/red-dragon-head-digital-painting.jpg?s=612x612&w=0&k=20&c=dDu6vxNhL1zkXyXdLh0_AWqoysJPY43idokKFvknOaA=",
    matched: false,
  },
  {
    src: "https://i.pinimg.com/474x/f2/9b/aa/f29baa5a9d0f3fb375c55ef5f1d4dcf4.jpg",
    matched: false,
  },
  {
    src: "https://i.pinimg.com/736x/21/d2/00/21d200a76575df61ec31d73ec725822c.jpg",
    matched: false,
  },
  {
    src: "https://i.pinimg.com/originals/3c/c7/4a/3cc74a67fe0fda9dc515bdf675e3f583.jpg",
    matched: false,
  },
  {
    src: "https://i.pinimg.com/originals/93/d0/6e/93d06e123a90faa79d73fa3c08642059.jpg",
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffe cards
  const shuffleCards = (e) => {
    // e.preventDefault();
    const shuffledCards = [...cardImages, ...cardImages] //spread cardImages 2 times to duplicate the deck with pairs of cards
      .sort(() => Math.random() - 0.5) //This will return a positive or negative number
      .map((card) => ({ ...card, id: Math.random() })); //this will add a random ID to each card
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      //Check to see if both choices are made

      if (choiceOne.src === choiceTwo.src) {
        //Check to see if the cards match by image src

        setCards((prevCards) => {
          return prevCards.map((card) => {
            //map through current state
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
              //if the the current card src matches the choiceOne src then add the property:true to the card and send back to the deck2qa
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("those cards do not match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Memory Game</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              disabled={disabled}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            /> //card={card} is the card prop being passed into the SingleCard.js
          ))}
        </div>
        <p>{turns}</p>
      </div>
    </>
  );
}

export default App;
