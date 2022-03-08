class Form {
  constructor() {
    this.input=(createInput)
    this.attribute("place folder")
    this.input = createInput("").attribute("placeholder", "Dami");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting=createElement("h2")
   

  }
  hide(){
    this.greeting.hide()
    this.playButton.hide()
    this.input.hide()
  }
  handlemousePressed()
  {
    this.playButton.mousePressed(() => {
      this.input.hide()
      this.playButton.hide()
      var message=`
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message)
    })
  }
setElementpostion()
{
  this.titleImg.position(120,100);
  this.input.position(width/2-100,height/2-20);
  this.playButton.position(width/2-90,height/2-90)
  this.greeting.position(width/2-100)
}
  display() {
    this.setElementsPosition();
    this.handlemousePressed()

  }
}
  

