/*

Task 1

window.onload = function (){
	document.getElementById('boundary1').onmouseover = function(){
		document.getElementById('boundary1').classList.add("youlose");
	}
}
*/


//Task 2

window.onload = function(){
	boundaries = document.querySelectorAll(".boundary");
	for (i=0;i<boundaries.length;i++){
		boundaries[i].addEventListener("mouseover", function(element){
			this.classList.add("youlose");
		});
	};
}


