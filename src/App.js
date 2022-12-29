import "./App.css";
import SingleCard from "./components/SingleCard";
import React, { useState } from "react";
const cardImages = [
  {
    src: "https://i.pinimg.com/originals/86/56/2f/86562ffc016b2c03724e95e0afdc2702.jpg",
  },
  {
    src: "https://media.istockphoto.com/id/1183916666/vector/red-dragon-head-digital-painting.jpg?s=612x612&w=0&k=20&c=dDu6vxNhL1zkXyXdLh0_AWqoysJPY43idokKFvknOaA=",
  },
  {
    src: "https://i.pinimg.com/474x/f2/9b/aa/f29baa5a9d0f3fb375c55ef5f1d4dcf4.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/21/d2/00/21d200a76575df61ec31d73ec725822c.jpg",
  },
  {
    src: "https://i.pinimg.com/originals/3c/c7/4a/3cc74a67fe0fda9dc515bdf675e3f583.jpg",
  },
  {
    src: "https://i.pinimg.com/originals/93/d0/6e/93d06e123a90faa79d73fa3c08642059.jpg",
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setturns] = useState(0);

  //shuffe cards
  const shuffleCards = (e) => {
    e.preventDefault();
    const shuffledCards = [...cardImages, ...cardImages] //spread cardImages 2 times to duplicate the deck with pairs of cards
      .sort(() => Math.random() - 0.5) //This will return a positive or negative number
      .map((card) => ({ ...card, id: Math.random() })); //this will add a random ID to each card

    setCards(shuffledCards);
    setturns(0);
  };
  console.log("cards", cards);
  console.log("turns", turns);

  return (
    <>
      <div className="App">
        <h1>Memory Game</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} /> //card={card} is the card prop being passed into the SingleCard.js
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
