function TennisGame(){
  // ขอให้มีfunction
  this.reset = () =>{


  }
  this.echo = () =>{
    return 'Love - Love'
  }
}



test('try success test case',() =>{

  expect(true).toBe(true)
})
test('Echo "Love - Love"when game start', () => {

//arrange
let app = new TennisGame ()
app.reset()


//
let result = app.echo()


 //Assert
 expect(result).toBe('Love - Love')
})
