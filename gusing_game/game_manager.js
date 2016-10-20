var target_color;
var guess_input_text;
var guess_input;
var finished=false;
var guesses=0;
var color_box=['blue','cyan','gold','green','magenta','orange','red','gray','yellow'];
function game_manager()
{
	var random_number=Math.floor(Math.random()*10);
	target_color=color_box[random_number];
	while(!finished)
	{
	    //make color_box array more guessable
	    color_box.sort();
		//convert colors in string
		var color_string=color_box.join();
		guess_input_text=prompt("I am thinking of one of these colors:\n\n"+color_string+"\n\nwhat color I am thinking off");
		guesses+=1;
		finished=check_guess()	
	}

}

function check_guess()
{
	
	
	//if guess_input_text not inside the color_box
	//throw the error your color is not recognized.or unwanted text
	var in_or_not=true;
	for(var i=0;i<=color_box.length-1;i++)
	{
		
		if(color_box[i]==guess_input_text)
		{
			in_or_not=true;
			break;
			
		}
		else
		{
			in_or_not=false;
		}
		
	}

	
	if(!in_or_not)
	{
		alert("Sorry. I don't recognize your color \n\n please tryagain.");
		return false;
	}



	//if guess_input_text is greater than the targeted color text
	//throw the errow your guess is higher then my guesed color
	if(guess_input_text>target_color)
	{
		alert("Sorry ,your guess is not correct !\n\nHint: your color is alphabetically higher then mine \n\n Please try again.");
		return false;
	}

	//if guess_input_text is less then the targeted color text
	//throw the error your guess is lower then my guessed color 
	if(guess_input_text<target_color)
	{
		alert("Sorry ,your guess is not correct !\n\nHint: your color is alphabetically lower then mine \n\n Please try again.");
		return false;
	}

	//if guessed color is equel to the targed color show winning msg
	if(guess_input_text===target_color)
	{
		document.body.style.background =target_color;
		alert("Congraluation ! you guessed the color ! \n It took you "+guesses+" guesses To finish the game");
		return true;	
	}

	
}
