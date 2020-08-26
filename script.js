var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

document.getElementById('name').onkeydown = function(event) {
    if (event.keyCode == 13) {
        displayDetails();
    }
}

var row = 1;

nameCount = 0;

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
	
	document.getElementById("insertCount").innerHTML = "Your name count: " + nameCount;
	
	row++;

}
