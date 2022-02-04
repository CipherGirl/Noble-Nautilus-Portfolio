import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import classes from "./GameBoard.module.css";

const cardImages = [
  { src: "/images/Dinu.jpg", matched: false },
  { src: "/images/arsalan.jpeg", matched: false },
  { src: "/images/Dinu.jpg", matched: false },
  { src: "/images/Dinu.jpg", matched: false },
  { src: "/images/Dinu.jpg", matched: false },
  { src: "/images/dani.jpeg", matched: false },
  { src: "/images/mahera.png", matched: false },
  { src: "/images/riya.jpeg", matched: false },
  { src: "/images/hasna.png", matched: false },
  { src: "/images/hasna.png", matched: false },
  { src: "/images/hasna.png", matched: false },
  { src: "/images/hasna.png", matched: false },
];

export default function GameBoard() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      console.log(shuffleCards);

    setCards(shuffledCards);
    setTurns(0);
  };

    useEffect(() => {
        shuffleCards();
    }, []);

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setDisabled(false);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className={classes.App}>
      <h1 className="text-2xl text-center">
        Play with us and train your memory!
      </h1>
      <div className={classes.card_grid}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <button className={classes.button} onClick={shuffleCards}>
        New Game
      </button>
    </div>
  );
}
