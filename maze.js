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
beganMaze = false;
endedMaze = false;
touchedNoBoundaries = true;

window.onload = function(){

	start = document.getElementById("start");
	end   = document.getElementById("end");
	boundaries = document.querySelectorAll(".boundary");
	maze = document.getElementById("maze");

	//Boundary changes to red when a mouse touches it
	for (i=0;i<boundaries.length;i++){
		boundaries[i].addEventListener("mouseover", function(element){
			
			for (i=0;i<boundaries.length;i++){
				boundaries[i].classList.add("youlose")
			}
			touchedNoBoundaries = false;
		});
	};


	//Alert Box pops up when game is won;
	start.addEventListener("mouseover", function(){
		beganMaze = true;
	});

	start.addEventListener("click", function(){
		location.reload();
	})

	end.addEventListener("mouseover", function(){
		endedMaze = true;

		if (beganMaze && touchedNoBoundaries){
			document.getElementById("status").innerHTML = "YOU WIN";
		} else {
			document.getElementById("status").innerHTML = "YOU LOSE";;
		}
	});

	maze.onmouseleave = function(){
		if (beganMaze === true){
			document.getElementById("status").innerHTML = "YOU LOSE: YOU LEFT THE MAZE";
		}
	}
}



