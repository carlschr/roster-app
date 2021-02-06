function Player(player) {
    return (
        <li>
            <h2>{`${player.firstName} ${player.lastName}`}</h2>
            <p>{player.jerseyNumber}</p>
        </li>
    )
}

export default Player;