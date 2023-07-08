import styles from './EndScreen.css';

const EndScreen = ({retryGame}) => {
  return (
    <div>
      <h1>EndScreen</h1>
      <button onClick={retryGame}>Reiniciar o jogo!</button>
    </div>
  )
}

export default EndScreen