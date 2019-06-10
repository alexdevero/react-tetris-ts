// Import React
import * as React from 'react'

// Define props for TetrisBoard component
type TetrisBoardProps = {
  field: any[],
  gameOver: boolean,
  score: number,
  level: number,
  rotate: number
}

// Create TetrisBoard component
const TetrisBoard: React.FC<TetrisBoardProps> = (props) => {
  // Create board rows
  let rows: any[] = []

  props.field.forEach((row, index) => {
    // Create board columns
    const cols = row.map((column: any, index: number) => <div className={`col-${column}`} key={index} />)

    rows.push(<div className="tetris-board__row" key={index}>{cols}</div>)
  })

  return (
    <div className="tetris-board">
      {/* Game info */}
      <div className="tetris-board__info">
        <p className="tetris-board__text">Level: {props.level}</p>

        <p className="tetris-board__text">Score: {props.score}</p>

        {props.gameOver && <p className="tetris-board__text"><strong>Game Over</strong></p>}
      </div>

      {/* Game board */}
      <div className="tetris-board__board">{rows}</div>
    </div>
  )
}

export default TetrisBoard
