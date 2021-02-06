import Player from './Player';
import playerData from './playerData';


function PlayerList() {
    return (
        <ul>
            {playerData.map(player => {
                return (
                    Player(player)
                )
            })}
        </ul>
    )
}

export default PlayerList;