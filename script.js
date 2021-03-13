//Dropdown function

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++){
	dropdown[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "flex"){
			dropdownContent.style.display = "none";
		}else{
			dropdownContent.style.display = "flex";
		}	
	});
}

function changeIconInterest() {
	if(document.getElementById("icon1").className === "fa fa-caret-up"){
		document.getElementById("icon1").className = "fa fa-caret-down";
	}else{
		document.getElementById("icon1").className = "fa fa-caret-up";
	}
}

function changeIconSkill() {
	if(document.getElementById("icon2").className === "fa fa-caret-up"){
		document.getElementById("icon2").className = "fa fa-caret-down";
	}else{
		document.getElementById("icon2").className = "fa fa-caret-up";
	}
}

function changeIconContact() {
	if(document.getElementById("icon3").className === "fa fa-caret-up"){
		document.getElementById("icon3").className = "fa fa-caret-down";
	}else{
		document.getElementById("icon3").className = "fa fa-caret-up";
	}
}

function execute_typer(codetyper){
	let resultan = codetyper.value;
	if(resultan == "Interest"){
		let dropdownContent = document.querySelector('#interest-info');
		if (dropdownContent.style.display === "flex"){
			alert("Informasi Interest dari Ega telah ditampilkan!");
		}else{
			dropdownContent.style.display = "flex";
			changeIconInterest();
		}	
	}else if (resultan == "Skill") {
		let dropdownContent = document.querySelector('#skill-info');
		if (dropdownContent.style.display === "flex"){
			alert("Informasi Skill dari Ega telah ditampilkan!");
		}else{
			dropdownContent.style.display = "flex";
			changeIconSkill();
		}
	}else if (resultan == "Contact") {
		let dropdownContent = document.querySelector('#contact-info');
		if (dropdownContent.style.display === "flex"){
			alert("Informasi Contact dari Ega telah ditampilkan!");
		}else{
			dropdownContent.style.display = "flex";
			changeIconContact();
		}
	}else{
		alert("Maaf perintah error atau kategori perintah belum tersedia");
	}
}