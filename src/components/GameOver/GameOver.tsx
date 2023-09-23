function GameOver({retry}: {retry: () => void}){
    return(
        <>
            <h1>Game Over</h1>
            <button onClick={retry}>Play again</button>
        </>
    )
}

export default GameOver