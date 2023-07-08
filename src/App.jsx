import './App.css';
import InitialScreen from './components/InitialScreen';
import GameScreen from './components/GameScreen'
import EndScreen from './components/EndScreen';
import { wordsData } from './data/Words';
import { useState, useEffect, useCallback } from 'react';

const stages = [
  {id:0, name:'Initial'},
  {id:1, name:'Game'},
  {id:2, name:'End'}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  const [pickCategory, setPickedCategory] = useState("");
  const [pickWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);

  const [score, setScore] = useState(0);


  const pickedWordAndCategory = () => {
    const categoryKeys = Object.keys(wordsData); 
    const categoryKeyRandom = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];

    const wordCategories = wordsData[categoryKeyRandom];
    const wordRandom = wordCategories[Math.floor(Math.random() * wordCategories.length)];

    return {categoryKeyRandom, wordRandom};
  };
  

  const gameScreen = () => {
    const {categoryKeyRandom, wordRandom} = pickedWordAndCategory();
    let wordLetters = wordRandom.split("");
    wordLetters = wordLetters.map(l => l.toLowerCase());
    setPickedWord(wordRandom);
    setPickedCategory(categoryKeyRandom);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }
  
  const endScreen = () => {
    setGameStage(stages[2].name);
  }

  const restartGame = () => {
    setGameStage(stages[0].name);
  }

  return (
  <div className="App">

    {gameStage === 'Initial' && <InitialScreen startGame={gameScreen} />}
    {gameStage === 'Game' && <GameScreen gameOver={endScreen}
     score={score}
     category={pickCategory}
     word={pickWord}
     letters={letters}
     guessedLetters={guessedLetters}
     wrongLetters={wrongLetters}
     guesses={guesses}
     />}
    {gameStage === 'End' && <EndScreen retryGame={restartGame}/>}
  </div>
  )
}
 
export default App
