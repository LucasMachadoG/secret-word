function Game({verifyLetter}: {verifyLetter: () => void}) {
    return(
        <>
            <p>
                <span>Pontuação: 000</span>
            </p>
            <h1>Adivinhe a palavra: </h1>
            <h3>Dica sobre a palvra: </h3>
            <div>
                <span></span>
                <span></span>
            </div>
            <div>
                <p>Tente adivinhar a palavra</p>
                <form>
                    <input type="text" name="letter" maxLength={1}></input>
                    <button>Play</button>
                </form>
            </div>
            <div>
                <p>Letras já utilizadas</p>
            </div>
        </>
    )
}

export default Game