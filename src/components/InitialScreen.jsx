import styles from './InitialScreen.css';

const InitialScreen = ({startGame}) => {
  return (
    <div className="initial">
        <h1>Jogo da Palavra</h1>
        <h2>Clique no botão para o jogo começar</h2>
        <button onClick={startGame}>Bora Iniciar esse jogo!</button>
    </div>
  )
}

export default InitialScreen