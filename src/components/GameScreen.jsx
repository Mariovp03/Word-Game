import styles from './GameScreen.css';

const GameScreen = ({gameOver, score, category, guesses, letters, guessedLetters, wrongLetters}) => {
  return (
    <div className="game">
      <p className='points'>
        <span>Pontuação:{score}</span>
      </p>
      <h1>Advinhe a Palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{category}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) :
          <span key={i} className='blankSquare'></span>

        ))}
      </div>
      <div className='letterContainer'>
        <p>Tente advinhar uma letra</p>
        <form action="">
          <input type="text" name="letter" maxLength={1} required />
          <button onClick={gameOver}>Jogar!</button>
        </form>
      </div>
      <div className='letterError'>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
        <span>a</span>
      </div>
    </div>
  )
}

export default GameScreen