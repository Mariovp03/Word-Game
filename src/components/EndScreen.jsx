import styles from './EndScreen.css';

const EndScreen = ({retryGame, score}) => {
  return (
    <div className='endScreen'>
      <h1>Fim do jogo!</h1>
      <h2>A sua pontuação foi:<span>{score}</span></h2>
      <button onClick={retryGame}>Reiniciar o jogo!</button>
    </div>
  )
}

export default EndScreen