const greeting = require('./greeting')
const expect = require("expect");

test('works', () => {
    expect(greeting()).toBe("Hello");
});

class TennisGame{
    constructor(){

    }

    getScore(){
        return "Love-all"
    }
}

test('When a game has started, the score is Love-all',()=>{
    const game = new TennisGame()
    expect(game.getScore()).toBe("Love-all")
})
