/*

Task 1

window.onload = function (){
	document.getElementById('boundary1').onmouseover = function(){
		document.getElementById('boundary1').classList.add("youlose");
	}
}
*/


//Task 2-6s

//Vriable Declarations
beganMaze           = false;
endedMaze           = false;
touchedNoBoundaries = true;

window.onload  = function(){

	start      = document.getElementById("start");
	end        = document.getElementById("end");
	boundaries = document.querySelectorAll('.boundary:not(.example)');
	maze       = document.getElementById("maze");


	function touchWallMessage(){
		document.getElementById("status").innerHTML = "YOU LOSE: YOU TOUCHED THE WALL";
		removeListeners();
	}

	function turnWallsRed(){
		if (beganMaze){
			touchWallMessage();
			touchedNoBoundaries = false;

			for (i=0;i<boundaries.length;i++){
					boundaries[i].classList.add("youlose")
				}
			}
		}

	function changeBeganMazeValue(){
		beganMaze = true;
	}

	function changeEndedMazeValue(){
		endedMaze = true;
		if (beganMaze && touchedNoBoundaries){
			document.getElementById("status").innerHTML = "YOU WIN";
			removeListeners();
		}
	}

	function locationReload(){
		location.reload();
	}

	function exitMazeMessage(){
		if (beganMaze){
			turnWallsRed();
			document.getElementById("status").innerHTML = "YOU LOSE: YOU LEFT THE MAZE";
			removeListeners();
		}
	}

	function removeListeners(){
		for(i=0;i<boundaries.length;i++){
			boundaries[i].removeEventListener("mouseover", turnWallsRed);
		}
		maze.removeEventListener("mouseleave", exitMazeMessage);
		start.removeEventListener("mouseover", changeBeganMazeValue);
		end.removeEventListener("mouseover", changeEndedMazeValue);
	}


	for (i=0;i<boundaries.length;i++){
		boundaries[i].addEventListener("mouseover", turnWallsRed);
	}

	start.addEventListener("mouseover", changeBeganMazeValue);

	start.addEventListener("click", locationReload);

	end.addEventListener("mouseover", changeEndedMazeValue);

	maze.addEventListener("mouseleave", exitMazeMessage);

}

