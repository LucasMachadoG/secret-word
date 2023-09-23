interface GameOverProps{
    retry: () => void
    score: number
}

function GameOver({retry, score} : GameOverProps){
    return(
        <>
            <h1>Game Over</h1>
            <h2>
                A sua pontuacao foi: <span>{score}</span>
            </h2>
            <button onClick={retry}>Play again</button>
        </>
    )
}

export default GameOver