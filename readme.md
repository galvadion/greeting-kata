# Tennis game score tracker
This kata is about implementing a score tracker similar to the one used in a tennis game.
This software must allow to input whenever a player scores a point and also have the ability to show the current score or, when the game is finished, the winner of that game.
It must follow the scoring rules below to show the current score.
Games and Sets are excluded from this exercise.

## Scoring rules

1. When a player score has a value between zero and three, values are described as follows

- 0: "Love"
- 1: "15"
- 2: "30"
- 3: "40"
The standard expected output should be score of player1 dash score of player2, for example: "15-30"


2. The *game* starts with both players at score = 0, the expected output should be: "Love-all"
3. When the players are tied and the score is lower than "40", the expected output should be the score dash "all", for example: "30-all"
4. When the players are tied and the score is "40", the expected output should be: "Deuce"
5. When in "Deuce" after the first player scores a point, the expected output is "Adv-1", the same goes for second player as: "Adv-2"
6. If the player that is not in Adv scores a point the expected output goes back to "Deuce"
7. If no *deuce* happened during the *game*, the *game* is won by the first player to score after "40". If "Deuce" happened the firs player to score two times in a row is the winner.

## Requirements

The task is to create a class called "TennisGame" that follows two methods:
- wonPoint(player: string): void
This method adds a point to the player that is passed as parameter
- getScore(): string
It returns the score of both players

## Example game:

Start game: "Love-all"  
Player1 scores a point: "15-Love"  
Player2 scores a point: "15-all"  
Player1 scores a point: "30-15"  
Player1 scores a point: "40-15"  
Player2 scores a point: "40-30"  
Player2 scores a point: "Deuce"  
Player2 scores a point: "Adv-2"  
Player2 scores a point: "Game player2"  