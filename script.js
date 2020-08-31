var entry = document.getElementById("entryButton");
entry.addEventListener("click", displayDetails);

document.getElementById('name').onkeydown = function(event) {
    if (event.keyCode == 13) {
        displayDetails();
    }
}

document.getElementById("divTB").style.display = 'none';

var row = 1;

nameCount = 0;

document.getElementById("insertCount").innerHTML = "Your name count: " + nameCount;

function displayDetails() {

	var name = document.getElementById("name").value;
	
	if(!name) {
		alert("Please fill the box");
		return;
	}
	
	var display = document.getElementById("display");
	
	var newRow = display.insertRow(row);
	
	var cell1 = newRow.insertCell(0);

	cell1.innerHTML = name;
	
	nameCount++;
	
	document.getElementById("divTB").style.display = 'block';
		
	row++;
	
	document.getElementById("insertCount").innerHTML = "Your name count: " + nameCount;
}

function removeRow() {
	
	document.getElementById("display").deleteRow(-1);
	
	nameCount--;
	
	document.getElementById("insertCount").innerHTML = "Your name count: " + nameCount;
	
	if (nameCount === 0) {
		document.getElementById("divTB").style.display = 'none';
		location.reload();
	}
}
