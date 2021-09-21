class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount(){
    database.ref("playerCount").on("value",(data)=>{
      playerCount = data.val();
    })
  } 
  
  updateCount(count){
      database.ref("/").update({
        playerCount : count
      })
  }

  addPlayer(){
      var playerIndex = "players/player"+this.index;

      if(this.index === 1){
        this.positionX = width/2 -100
      }
      else{
        this.positionX = width/2 + 100;
      }

      database.ref(playerIndex).update({
        name : this.name,
        positionX : this.positionX,
        positionY : this.positionY
      })
  } 

  static getPlayersInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",(data)=>{
      allPlayers  = data.val();
    })
  }
}
