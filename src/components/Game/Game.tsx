import { useState, useRef } from "react"
import { Form, Input, LetterContainer, P, SpanBlankSquare, SpanLetter, Title, WordContainer } from "./style"

interface GameProps{
    verifyLetter: (letter:string) => void
    pickedWord: string
    pickedCategory: string
    letters: string[]
    wrongLetters: string[]
    guesses: number
    score: number
    guessedLetters: string[]
}

function Game(props: GameProps) {
    const [letter, setLetter] = useState("")
    // Esse hook cria uma referencia a algum lugar
    const letterInputRef = useRef<HTMLInputElement | null>(null)

    function handleSubmit(e: React.FormEvent<HTMLFormElement | null>){
        e.preventDefault()

        props.verifyLetter(letter)

        setLetter("")
        
        if (letterInputRef.current) {
            letterInputRef.current.focus();
        }
    }

    return(
        <div>
            <p>
                <span>Pontuação: {props.score}</span>
            </p>
            <Title>Adivinhe a palavra: </Title>
            <h3>Dica sobre a palvra: <span>{props.pickedCategory}</span></h3>
            <p>Voce ainda tem {props.guesses} tentativas</p>
            <WordContainer>
                {props.letters.map((letter, i) => (
                    props.guessedLetters.includes(letter) ? (
                        <SpanLetter key={i}>{letter}</SpanLetter>
                    ) : (
                        <SpanBlankSquare key={i}></SpanBlankSquare>
                    )
                ))}
            </WordContainer>
            <LetterContainer>
                <p>Tente adivinhar a palavra</p>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="letter"
                        maxLength={1}
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Play</button>
                </Form>
            </LetterContainer>
            <div>
                <P>Letras já utilizadas: </P>
                {props.wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}

export default Game