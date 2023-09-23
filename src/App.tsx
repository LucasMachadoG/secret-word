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
    const [letters, setLetters] = useState<string[]>([])

    const [guesseLetters, setGuesseLetters] = useState<string[]>([])
    const [wrongLetters, setWrongLetters] = useState<string[]>([])
    const [guesses, setGuesses] = useState(5)
    const [score, setScores] = useState(0)
    
    const pickWordCategory = useCallback(() => {
        const categories = Object.keys(wordsList)
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

        const word = wordsList[category][Math.floor(Math.random() * wordsList[category].length)]

        console.log(word)
        
        return {word, category}
    }, [wordsList])

    // Starts the secret word
    const startGame = useCallback(() => {
        clearLetterStates()
        const {word, category} =  pickWordCategory()

        setGameStage(stages[1].name)

        let wordLetters = word.split("")

        wordLetters = wordLetters.map((l) => l.toLowerCase())

        setPickedWord(word)
        setPickedCategory(category)
        setLetters(wordLetters)
    }, [pickWordCategory])

    // Process the letter input
    const verifyLetter = (letter: string) => {
        const normalizedLetter = letter.toLowerCase()

        if(guesseLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
            return
        }

        // Verificando se no meu array de letras tem a normalizedLetter e caso tenha, ela vai adicionar nas minhas letras adivinhadas
        if(letters.includes(normalizedLetter)){
            setGuesseLetters((actualGuessedLetters) => [
                ...actualGuessedLetters, normalizedLetter 
            ])
        } else {
            setWrongLetters((actualWrongLetter) => [
                ...actualWrongLetter,
                normalizedLetter
            ])

            setGuesses((actualGuesses) => actualGuesses - 1)


        }
    }

    const clearLetterStates = () => {
        setGuesseLetters([])
        setWrongLetters([])
    }

    useEffect(() => {
        if(guesses === 0){
            clearLetterStates()
            setGameStage(stages[2].name)
        }
    }, [guesses])

    useEffect(() =>{
        // Isso vai me dar um array com letras unicas, sem ter repetidas
        const uniqueLetters = [...new Set(letters)]

        if(guesseLetters.length === uniqueLetters.length && gameStage === stages[1].name){
            setScores((actualScore) => actualScore += 100)

            startGame()
        }

    }, [guesseLetters, letters, startGame])

    const retry = () => {
        setScores(0)
        setGuesses(5)

        setGameStage(stages[0].name)
    }

    return (
        <>
            <GlobalStyle />
            {gameStage === "start" && <HomeScreen startGame={startGame}/>}
            {gameStage === "game" && <Game 
                verifyLetter={verifyLetter} 
                pickedWord={pickedWord} 
                pickedCategory={pickedCategory} 
                letters={letters}
                wrongLetters={wrongLetters}
                guessedLetters={guesseLetters}
                guesses={guesses}
                score={score}
            />}
            {gameStage === "end" && <GameOver retry={retry} score={score}/>}
        </>
    )
}

export default App
