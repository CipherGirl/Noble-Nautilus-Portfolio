import classes from"./SingleCard.module.css";

export default function singleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={classes.card}>
      <div className={flipped ? classes.flipped : ""}>
        <img
          className={classes.font}
          src="/images/avatar.png"
          alt="card front"
        ></img>
        <img
          className={classes.back}
          src="/images/avatar.png"
          onClick={handleClick}
          alt="card back"
        ></img>
      </div>
    </div>
  );
}
