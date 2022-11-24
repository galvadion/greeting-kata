const greeting = require('./greeting')
const expect = require("expect");

test('works', () => {
    expect(greeting()).toBe("Hello");
});

class TennisGame{
    playerOneScore = 0;
    playerTwoScore = 0;
    constructor(){

    }

    wonPoint(player){
        this.playerOneScore ++;
    }

    getScore(){
        if(this.playerOneScore == this.playerTwoScore)
            return "Love-all"
        return "15-Love"
    }
}

test('When a game has started, the score is Love-all',()=>{
    const game = new TennisGame()
    expect(game.getScore()).toBe("Love-all")
})

test('When player one scores on an empty game, score should be 15-Love',()=>{
    const game = new TennisGame()
    game.wonPoint("player1")
    expect(game.getScore()).toBe("15-Love")
})
