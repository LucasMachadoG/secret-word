import Game from "./components/Game/Game"
import GameOver from "./components/GameOver/GameOver"
import HomeScreen from "./components/HomeScreen/HomeScreen"
import { wordsList } from "./data/word"
import GlobalStyle from "./style/GlobalStyle"
import { useCallback, useEffect, useState } from 'react'

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"}
]

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name)

    const [pickedWord, setPickedWord] = useState("")
    const [pickedCategory, setPickedCategory] = useState("")   
    const [letters, setLetters] = useState([])
    
    const pickWordCategory = () => {
        const categories = Object.keys(wordsList)
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

        const word = wordsList[category][Math.floor(Math.random() * wordsList[category].length)]
        
        return {word, category}
    }

    // Starts the secret word
    const startGame = () => {
        const {word, category} =  pickWordCategory()

        console.log(word, category)

        setGameStage(stages[1].name)

        let wordLetters = word.split("")

        wordLetters = wordLetters.map((l) => l.toLowerCase())

        setPickedWord(word)
        setPickedCategory(category)
        setLetters(letters)
    }

    // Process the letter input
    const verifyLetter = () => {
        setGameStage(stages[2].name)
    }

    const retry = () => {
        setGameStage(stages[0].name)
    }

    return (
        <>
            <GlobalStyle />
            {gameStage === "start" && <HomeScreen startGame={startGame}/>}
            {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
            {gameStage === "end" && <GameOver retry={retry}/>}
        </>
    )
}

export default App
