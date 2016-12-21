//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
var arrayOfPlayers=[];
function player(name){
	var players={};
	var age=0;
	var position="";
	var level=0;
	var availability=true;
	players.name=name;
	players.addInfo=addInfo;
	players.increase=increase;
	players.availabel=availabel
	return players;
}


function addInfo(age,position,level,availability){
	this.age=age
	this.position=position
	this.level=level
	this.availability=availability
}

arrayOfPlayers.push(addInfo(22,"amman",2,false))
arrayOfPlayers.push(addInfo(25,"amman",4,true))

function increase(n){
	this.level=n;
} 

function availabel(){
	if(this.availability===true){
		return true;
	}else{
		return false;
	}
}