export interface GameState {
  cells: Cell[]
  currentPlayer: string
  winner?: string
  draw?: boolean
}

export interface Cell {
  x: number
  y: number
  text: string   
  playable: boolean
}