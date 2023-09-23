import Container from "./style"

const HomeScreen = ({startGame}: {startGame: () => void}) => {
    return(
        <Container>
            <h1>Secret Word</h1>
            <button onClick={startGame}>Play</button>
        </Container>
    )
}

export default HomeScreen