const greeting = require('./greeting')
const expect = require("expect");

test('works', () => {
    expect(greeting()).toBe("Hello");
});

class TennisGame{
    
    constructor(playerOneScore,playerTwoScore){
        this.playerOneScore = playerOneScore;
        this.playerTwoScore = playerTwoScore;
    }

    wonPoint(player){
        if(player=="player1")
            this.playerOneScore ++;
        else this.playerTwoScore ++;
    }

    getScore(){
        if(this.scoresAreTied())
            return `${this.getSideScore(this.playerOneScore)}-all`
        return `${this.getSideScore(this.playerOneScore)}-${this.getSideScore(this.playerTwoScore)}`
    }

    scoresAreTied() {
        return this.playerOneScore == this.playerTwoScore;
    }

    getSideScore(score){
        if(score == 0)
        return "Love"
        else if(score==1) return "15"
        else return "30"
    }
}

test('When a game has started, the score is Love-all',()=>{
    const game = new TennisGame(0,0)
    expect(game.getScore()).toBe("Love-all")
})

test('When player one scores on an empty game, score should be 15-Love',()=>{
    const game = new TennisGame(0,0)
    game.wonPoint("player1")
    expect(game.getScore()).toBe("15-Love")
})

test('When player two scores on an 1-0 game, score should be 15-all',()=>{
    const game = new TennisGame(1,0)
    game.wonPoint("player2")
    expect(game.getScore()).toBe("15-all")
})

test('When player ones scores on an 1-1 game, score should be 30-15',()=>{
    const game = new TennisGame(1,1)
    game.wonPoint("player1")
    expect(game.getScore()).toBe("30-15")
})
