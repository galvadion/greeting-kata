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
        if(this.scoresAreTied()){
            if(this.playerOneScore >=3) return "Deuce"
            return `${this.getSideScore(this.playerOneScore)}-all`
        }
        if(this.playerTwoScore>3) {
            return this.getWhoIsWinning()
        }
        return `${this.getSideScore(this.playerOneScore)}-${this.getSideScore(this.playerTwoScore)}`
    }

    scoresAreTied() {
        return this.playerOneScore == this.playerTwoScore;
    }

    getWhoIsWinning(){
        return this.playerTwoIsUpByTwoPoints() ?
            "Game player2" : this.playerOneIsUpByTwoPoints() ? "Game player1" :
            this.playerTwoHasAdvantage() ? "Adv-2" : "Adv-1"
    }

    playerTwoHasAdvantage() {
        return this.playerTwoScore > this.playerOneScore;
    }

    playerOneIsUpByTwoPoints() {
        return this.playerOneScore - this.playerTwoScore > 1;
    }

    playerTwoIsUpByTwoPoints() {
        return this.playerTwoScore - this.playerOneScore > 1;
    }

    /*
        {
            0:'Love',1:'15',2:'30'
        }
    */
    getSideScore(score){
        const map = new Map()
        map.set(0,'Love')
        map.set(1,'15')
        map.set(2,'30')
        map.set(3,'40')
        return map.get(score)
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

test('When player ones scores on an 2-1 game, score should be 40-15',()=>{
    const game = new TennisGame(2,1)
    game.wonPoint("player1")
    expect(game.getScore()).toBe("40-15")
})

test('When player two scores on an 3-1 game, score should be 40-30',()=>{
    const game = new TennisGame(3,1)
    game.wonPoint("player2")
    expect(game.getScore()).toBe("40-30")
})


test('When player two scores on an 3-2 game, score should be Deuce',()=>{
    const game = new TennisGame(3,2)
    game.wonPoint("player2")
    expect(game.getScore()).toBe("Deuce")
})



test('When player two scores on an 3-3 game, score should be Adv-2',()=>{
    const game = new TennisGame(3,3)
    game.wonPoint("player2")
    expect(game.getScore()).toBe("Adv-2")
})


test('When player two scores on an 3-4 game, score should be Game player2',()=>{
    const game = new TennisGame(3,4)
    game.wonPoint("player2")
    expect(game.getScore()).toBe("Game player2")
})


test('When player one scores on an 3-4 game, score should be Game player2',()=>{
    const game = new TennisGame(3,4)
    game.wonPoint("player1")
    expect(game.getScore()).toBe("Deuce")
})

test('When player one scores on an 4-4 game, score should be Adv-1',()=>{
    const game = new TennisGame(4,4)
    game.wonPoint("player1")
    expect(game.getScore()).toBe("Adv-1")
})

test('When player one scores on an 5-4 game, score should be Game player1',()=>{
    const game = new TennisGame(5,4)
    game.wonPoint("player1")
    expect(game.getScore()).toBe("Game player1")
})
