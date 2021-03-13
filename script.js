//Dropdown function

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++){
	dropdown[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "none"){
			dropdownContent.style.display = "flex";
			// document.getElementById("icon").className = "fa fa-caret-up";
		}else{
			dropdownContent.style.display = "none";
			// document.getElementById("icon").className = "fa fa-caret-down";
		}	
	});
}

function changeIconInterest() {
	if(document.getElementById("icon1").className === "fa fa-caret-down"){
		document.getElementById("icon1").className = "fa fa-caret-up";
	}else{
		document.getElementById("icon1").className = "fa fa-caret-down";
	}
}

function changeIconSkill() {
	if(document.getElementById("icon2").className === "fa fa-caret-down"){
		document.getElementById("icon2").className = "fa fa-caret-up";
	}else{
		document.getElementById("icon2").className = "fa fa-caret-down";
	}
}

function changeIconContact() {
	if(document.getElementById("icon3").className === "fa fa-caret-down"){
		document.getElementById("icon3").className = "fa fa-caret-up";
	}else{
		document.getElementById("icon3").className = "fa fa-caret-down";
	}
}