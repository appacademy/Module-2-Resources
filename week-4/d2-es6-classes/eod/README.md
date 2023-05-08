# Chess!!!

Today we are going to begin building out a game of Chess
using OOP and TDD (more on this later in the week). Before we begin we need to 
think about a couple of things...

## What are some of the components of a game of Chess?
- Board
- Squares
- Pieces
- Moves
- Players
- Game
  - Which player turn
  - pieces captured
  - timer???
- Rules


## How can we represent these components with code?
- Individual classes to represent the components from above
    - Properties and methods associated with that component
    - One generic Piece class all other pieces will inherit from this. 
- 2 dimensional array 
   - 8*8 grid
   - each spot represented by a square that keeps track of
   its coordinates and the piece that occupies
